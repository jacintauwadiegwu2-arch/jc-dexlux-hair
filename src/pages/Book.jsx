import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Check, MessageCircle, Send } from 'lucide-react'

const emailEndpoint = 'https://formsubmit.co/jacintauwa12@gmail.com'

export default function Book() {
  const location = useLocation()
  const [hairChoice, setHairChoice] = useState(location.state?.hairChoice ?? '')
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const updateForm = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setSubmitted(false)
  }

  const whatsappMessage = [
    'Hi JC DEXLux HAIR! I’d love to make an inquiry.',
    `Name: ${form.name || 'Not provided'}`,
    `Phone: ${form.phone || 'Not provided'}`,
    `Hair choice: ${hairChoice || 'Not selected'}`,
    `Message: ${form.message || 'I’d love to learn more.'}`,
  ].join('\n')

  return (
    <section className="bg-blush">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-12 md:px-20 md:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-rose">A NOTE TO US</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">Let’s make it <span className="italic text-rose">personal.</span></h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-ink/60">Tell us what you’re looking for. Ask a question, find your texture, or start planning your next look. We can’t wait to hear from you.</p>
          <div className="mt-9 border-t border-ink/15 pt-5"><p className="eyebrow">PREFER A QUICK CHAT?</p>
          <p className="mt-2 text-sm text-ink/60">Send your details straight to us on WhatsApp.</p>
          <a href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer" className="button-outline mt-5 w-full sm:w-auto">
          <MessageCircle size={16} /> MESSAGE ON WHATSAPP</a></div>
          <p className="mt-8 font-display text-xl italic text-ink/70">Good hair days start with hello.</p>
        </div>

        <div className="bg-white p-5 shadow-[0_18px_60px_rgba(39,24,20,0.06)] sm:p-9 md:p-10">
          <div className="mb-8">
            <p className="eyebrow text-rose">INQUIRY FORM</p>
            <h2 className="mt-2 font-display text-3xl">How can we help?</h2>
            <p className="mt-2 text-sm text-ink/55">Fill in the details below and we’ll be in touch.</p>
            </div>
          <form action={emailEndpoint} method="POST" target="formsubmit-response" onSubmit={() => setSubmitted(true)} className="space-y-5">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Inquiry from JC DEXLux HAIR!" />
            <input type="hidden" name="_template" value="table" />
            <div>

              <label htmlFor="name" className="field-label">YOUR NAME <span className="text-rose">*</span>
              </label>
              <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={updateForm} className="form-input" autoComplete="name" />

              </div>

            <div>
              
              <label htmlFor="phone" className="field-label">PHONE NUMBER <span className="text-rose">*</span>
              </label>
              <input id="phone" name="phone" type="tel" required placeholder="Your phone number" value={form.phone} onChange={updateForm} className="form-input" autoComplete="tel" />
              
              </div>

            <div>
              <label htmlFor="hair_choice" className="field-label">WHAT ARE YOU INTERESTED IN?</label>
              <select id="hair_choice" name="hair_choice" value={hairChoice} onChange={(event) => setHairChoice(event.target.value)} className="form-input">
                <option value="">Choose a style</option>
                <option value="Best Seller">BEST Seller · Bone straight</option><option value="New Arrival">new Arrival · Bouncy Body Wave</option>
                <option value="TOP RATED">TOP RATED · Deep Wave</option>
                <option value="Not sure yet">I’m not sure yet</option>
                </select>
                </div>

            <div>
              <label htmlFor="message" className="field-label">YOUR MESSAGE</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us a little about what you have in mind..." value={form.message} onChange={updateForm} className="form-input resize-y" />
              </div>
            <button type="submit" className="button-dark w-full"><Send size={15} /> SEND INQUIRY</button>

          </form>
          {submitted &&  <div role="status" aria-live="polite" className="mt-5 flex gap-3 border border-emerald-700/20 bg-emerald-50 p-4 text-sm text-emerald-900">
          <Check size={18} className="mt-0.5 shrink-0" />
          <p><span className="font-semibold">Your inquiry is on its way.</span> Thank you for reaching out. We’ll be in touch soon.</p>
          </div>}
          
          <p className="mt-4 text-center text-[10px] leading-5 text-ink/45">By sending this form, your inquiry will be delivered by email.</p>
        </div>
      </div>
      <iframe title="Form submission response" name="formsubmit-response" className="hidden" />
    </section>
  )
}