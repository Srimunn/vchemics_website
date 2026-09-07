import { useState, type FormEvent } from "react";
import { CheckCircle, AlertCircle, Loader2, ArrowRight, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { allProducts } from "./data";
import { trackContactFormSubmit, trackCallClick } from "@/lib/analytics";

export interface EnquiryFormProps {
  initialRequirement?: string;
  className?: string;
  mode?: "full" | "compact";
  title?: string;
  subtitle?: string;
}

interface FormFields {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  productCategory: string;
  quantity: string;
  location: string;
  details: string;
  botcheck: boolean;
}

type Errors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  productCategory: "Concrete Admixtures",
  quantity: "",
  location: "Chennai",
  details: "",
  botcheck: false,
};

export function EnquiryForm({
  initialRequirement,
  className,
  mode = "full",
  title = "Request Technical Quotation / Trial Batch",
  subtitle = "Fill in your project requirements for custom dosage calibration and factory-direct pricing.",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormFields>({
    ...initialFields,
    productCategory: initialRequirement || initialFields.productCategory,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const updateField =
    (key: keyof FormFields) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const val =
        ev.target.type === "checkbox" ? (ev.target as HTMLInputElement).checked : ev.target.value;
      setFormData((prev) => ({ ...prev, [key]: val }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      if (status === "error") setStatus("idle");
    };

  const validate = (): boolean => {
    const e: Errors = {};
    if (formData.fullName.trim().length < 2) {
      e.fullName = "Please enter your full name (at least 2 characters).";
    }
    if (!/^[\d\s+()-]{8,16}$/.test(formData.phone.trim())) {
      e.phone = "Please enter a valid mobile / contact number.";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    if (mode === "full" && !formData.location.trim()) {
      e.location = "Please provide your project site location.";
    }
    if (
      mode === "compact" &&
      formData.details.trim().length > 0 &&
      formData.details.trim().length < 5
    ) {
      e.details = "Please enter at least 5 characters for your message.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (formData.botcheck) {
      // Bot detected, silently show success without sending
      setStatus("success");
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f76e2123-378c-4646-af8b-e27a8a749a63";

    const payload = {
      access_key: accessKey,
      subject: `New Technical Enquiry — ${formData.productCategory || "General Formulation"}`,
      from_name: formData.fullName,
      fullName: formData.fullName,
      company: formData.company || "Not provided",
      phone: formData.phone,
      email: formData.email || "Not provided",
      productCategory: formData.productCategory,
      quantity: formData.quantity || "Not specified",
      location: formData.location || "Not specified",
      details: formData.details || "No additional comments",
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        // Track GA4 contact_form_submit event
        trackContactFormSubmit({
          productCategory: formData.productCategory,
          fullName: formData.fullName,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          quantity: formData.quantity,
          mode,
        });

        setFormData({
          ...initialFields,
          productCategory: initialRequirement || initialFields.productCategory,
        });
        toast.success("Enquiry Sent Successfully!", {
          description:
            "Your enquiry has been delivered to our engineering desk. We'll contact you within 2 hours.",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "Something went wrong sending your enquiry. Please try again, or contact us directly at +91 99423-54602.",
        );
        toast.error("Submission Failed", {
          description: "Please check your network connection or contact us directly.",
        });
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your enquiry. Please try again, or contact us directly at +91 99423-54602.",
      );
      toast.error("Submission Error", {
        description: "Network error. Please call +91 99423-54602 directly.",
      });
    }
  };

  const inputCls =
    "w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15";

  // 1. SUCCESS CONFIRMATION UI
  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-3xl border border-brand-green/40 bg-gradient-to-b from-card via-card to-brand-green/5 p-8 sm:p-12 text-center shadow-lg relative overflow-hidden",
          className,
        )}
      >
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-green via-brand-blue to-brand-green" />

        <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-brand-green/10 text-brand-green border border-brand-green/30 shadow-inner mb-6">
          <CheckCircle className="h-10 w-10 text-brand-green animate-in zoom-in-50 duration-300" />
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Enquiry Sent Successfully
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
          Your enquiry has been sent to{" "}
          <strong className="text-foreground font-semibold">vchemics1989@gmail.com</strong>. Our
          technical desk will respond within <strong className="text-foreground">2 hours</strong>.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center gap-2 rounded-xl btn-brand-gradient py-3.5 px-8 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-blue/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Submit Another Enquiry</span>
          </button>

          <a
            href="tel:+919942354602"
            onClick={() =>
              trackCallClick({ source: "enquiry_form_success", phone_number: "+91 99423-54602" })
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background py-3.5 px-6 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:bg-muted/50 hover:text-brand-blue transition-all"
          >
            <span>Call Technical Line</span>
          </a>
        </div>
      </div>
    );
  }

  // 2. ACTIVE FORM UI
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue" />

      {title && (
        <div className="mb-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
          {subtitle && <p className="text-xs sm:text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Spam Honeypot Protection */}
        <input
          type="checkbox"
          name="botcheck"
          checked={formData.botcheck}
          onChange={(e) => setFormData((prev) => ({ ...prev, botcheck: e.target.checked }))}
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Row 1: Full Name & Company */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Full Name <span className="text-brand-green">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="e.g. Rajesh Kumar"
              value={formData.fullName}
              onChange={updateField("fullName")}
              disabled={status === "submitting"}
              className={cn(
                inputCls,
                errors.fullName && "border-destructive focus:ring-destructive/15",
              )}
            />
            {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Company / Builder Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="e.g. Apex Infra Ltd"
              value={formData.company}
              onChange={updateField("company")}
              disabled={status === "submitting"}
              className={inputCls}
            />
          </div>
        </div>

        {/* Row 2: Mobile Number & Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Mobile Number <span className="text-brand-green">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 99423 54602"
              value={formData.phone}
              onChange={updateField("phone")}
              disabled={status === "submitting"}
              className={cn(
                inputCls,
                errors.phone && "border-destructive focus:ring-destructive/15",
              )}
            />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={updateField("email")}
              disabled={status === "submitting"}
              className={cn(
                inputCls,
                errors.email && "border-destructive focus:ring-destructive/15",
              )}
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>

        {/* Row 3: Product Category & Quantity (Full Mode) */}
        {mode === "full" && (
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="productCategory"
                className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Product Category <span className="text-brand-green">*</span>
              </label>
              <select
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={updateField("productCategory")}
                disabled={status === "submitting"}
                className={inputCls}
              >
                {allProducts.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
                <option value="Basement Waterproofing Solution">
                  Basement Waterproofing Solution
                </option>
                <option value="Terrace Waterproofing Solution">
                  Terrace Waterproofing Solution
                </option>
                <option value="Concrete Repair & Mortars">Concrete Repair &amp; Mortars</option>
                <option value="Structural Rehabilitation">Structural Rehabilitation</option>
                <option value="Industrial Flooring">Industrial Flooring</option>
                <option value="Other Technical Query">Other Technical Query</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Quantity / Volume
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                placeholder="e.g. 500 Litres / 50 Bags"
                value={formData.quantity}
                onChange={updateField("quantity")}
                disabled={status === "submitting"}
                className={inputCls}
              />
            </div>
          </div>
        )}

        {/* Row 4: Location (Full Mode) */}
        {mode === "full" && (
          <div>
            <label
              htmlFor="location"
              className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Project Site Location <span className="text-brand-green">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Guindy / Sriperumbudur / Coimbatore Site"
              value={formData.location}
              onChange={updateField("location")}
              disabled={status === "submitting"}
              className={cn(
                inputCls,
                errors.location && "border-destructive focus:ring-destructive/15",
              )}
            />
            {errors.location && <p className="mt-1 text-xs text-destructive">{errors.location}</p>}
          </div>
        )}

        {/* Row 5: Details / Message */}
        <div>
          <label
            htmlFor="details"
            className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            {mode === "full" ? "Project Details / Mix Specifications" : "Message / Requirements"}
          </label>
          <textarea
            id="details"
            name="details"
            rows={mode === "full" ? 3 : 4}
            placeholder={
              mode === "full"
                ? "Target grade (M40, M60), aggregate type, transit duration, or specific site challenge…"
                : "Tell us about your project type, quantities, or site challenges…"
            }
            value={formData.details}
            onChange={updateField("details")}
            disabled={status === "submitting"}
            className={cn(
              inputCls,
              "resize-y",
              errors.details && "border-destructive focus:ring-destructive/15",
            )}
          />
          {errors.details && <p className="mt-1 text-xs text-destructive">{errors.details}</p>}
        </div>

        {/* ERROR STATE BANNER */}
        {status === "error" && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs sm:text-sm text-destructive flex items-start gap-3 animate-in fade-in duration-200">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Submission Failed</p>
              <p className="mt-0.5 text-muted-foreground">
                {errorMessage ||
                  "Something went wrong sending your enquiry. Please try again, or contact us directly at +91 99423-54602."}
              </p>
            </div>
          </div>
        )}

        {/* SUBMIT BUTTON & LOADING STATE */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl btn-brand-gradient py-4 px-9 font-display text-sm font-bold uppercase tracking-[0.1em] text-white shadow-md shadow-brand-blue/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Technical Enquiry</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
