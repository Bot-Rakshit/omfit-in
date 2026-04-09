/**
 * OMFIT Site Configuration
 *
 * Update NEXT_BATCH_DATE whenever a new batch starts.
 * If the date has passed, the hero/program sections will
 * auto-display "Enrolments open — new batch every 2 weeks."
 */

export const SITE_CONFIG = {
  // Dynamic batch date — update this single value
  NEXT_BATCH_DATE: "2025-04-20",

  // Contact
  PHONE: "+91 84848 08896",
  PHONE_RAW: "918484808896",
  EMAIL: "team@omfit.in",
  ADDRESS: "12, OMFIT, Growworks coworker, Aundh, Pune 411027",

  // Payment
  RAZORPAY_URL: "https://pages.razorpay.com/pl_Sb4U9kzW4lcoZP/view",

  // Links
  WHATSAPP_URL: "https://wa.me/918484808896",
  WHATSAPP_TRAINING_URL:
    "https://wa.me/918484808896?text=Hi%2C%20I%27m%20interested%20in%20personal%20training",
  WHATSAPP_CORPORATE_URL:
    "https://wa.me/918484808896?text=Hi%2C%20I%27m%20enquiring%20about%20corporate%20wellness%20programs",
  PARENTS_URL: "https://omfitforparents.com",

  // Brand
  BRAND_LINE: "Not just a Diet, It is a Lifestyle",
  STAT_TRANSFORMED: "10,000+",
  FOUNDED: "2018",
  GOOGLE_RATING: "4.9",
} as const

/**
 * Returns the batch date label and whether enrolments are still open.
 * If the configured date has passed, returns a fallback message.
 */
export function getBatchInfo(): { label: string; isPast: boolean } {
  const batchDate = new Date(SITE_CONFIG.NEXT_BATCH_DATE + "T00:00:00+05:30")
  const now = new Date()

  if (batchDate < now) {
    return {
      label: "Enrolments open \u2014 new batch every 2 weeks",
      isPast: true,
    }
  }

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ]
  const day = batchDate.getDate()
  const month = months[batchDate.getMonth()]
  return {
    label: `Next batch starts ${month} ${day}`,
    isPast: false,
  }
}
