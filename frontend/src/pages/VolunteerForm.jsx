import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Upload, Send, Info } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import useSEO from '../hooks/useSEO'

export default function VolunteerForm() {
  const sectionRef = useReveal()
  useSEO(
    'Volunteer Application Form',
    'Apply to become a volunteer with Community Witnesses CIC. We welcome individuals dedicated to making a positive impact in our community.'
  )

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fileError, setFileError] = useState('')

  // Form State
  const [formData, setFormData] = useState({
    // 1. Personal Details
    fullName: '',
    address: '',
    postcode: '',
    phoneNumber: '',
    emailAddress: '',
    dateOfBirth: '',
    // 2. Emergency Contact
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    // 3. About You
    whyVolunteer: '',
    skillsExperience: '',
    livedExperience: '',
    // 4. Availability
    availability: {
      daytime: false,
      evening: false,
      weekends: false,
      flexible: false,
    },
    // 5. Training & Requirements
    mandatoryTraining: '',
    freeDBSCheck: '',
    // 6. Health & Safety
    healthConditions: '',
    // 7. Reference
    refName: '',
    refRelationship: '',
    refPhone: '',
    refEmail: '',
    // 9. Declaration
    confirmTrue: false,
    consentData: false,
    understandGDPR: false,
    understandRights: false,
  })

  const [files, setFiles] = useState({
    idProof: null,
    addressProof: null,
  })

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0]
    setFileError('')
    if (file) {
      // Check size (Max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB')
        e.target.value = ''
        return
      }
      setFiles({ ...files, [fileType]: file })
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      if (name in formData.availability) {
        setFormData({
          ...formData,
          availability: {
            ...formData.availability,
            [name]: checked,
          },
        })
      } else {
        setFormData({ ...formData, [name]: checked })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setFileError('')

    if (!files.idProof) {
      setFileError('Identity Verification (ID Upload) is required.')
      setLoading(false)
      window.scrollTo({ top: document.getElementById('id-upload-section').offsetTop - 100, behavior: 'smooth' })
      return
    }

    try {
      const data = new FormData()
      data.append('access_key', 'ecf89f2e-fc6a-4e40-81e7-7cb7b1dba761')
      data.append('subject', `New Volunteer Application: ${formData.fullName}`)
      data.append('from_name', formData.fullName)

      // Flatten formData to string values for Web3Forms
      Object.keys(formData).forEach((key) => {
        if (key === 'availability') {
          const availStr = Object.keys(formData.availability)
            .filter((k) => formData.availability[k])
            .join(', ')
          data.append(key, availStr || 'None selected')
        } else {
          data.append(key, formData[key].toString())
        }
      })

      // Attach files
      if (files.idProof) data.append('idProof', files.idProof)
      if (files.addressProof) data.append('addressProof', files.addressProof)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        // Let browser set Content-Type with the boundary automatically
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setFileError(result.message || 'Failed to send application. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setFileError('Error sending application. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const InputField = ({ label, name, type = "text", required = true, placeholder = "", options = {} }) => (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-slate-700 block">
        {label} {required && <span className="text-brand-primary">*</span>}
        {options.optional && <span className="text-slate-400 font-normal ml-1">(Optional)</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          rows={4}
          className="w-full bg-slate-50 border border-slate-200 py-3.5 px-5 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all placeholder:text-slate-400 resize-none"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className="w-full bg-slate-50 border border-slate-200 py-3.5 px-5 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all placeholder:text-slate-400"
        />
      )}
    </div>
  )

  const SectionTitle = ({ title, step }) => (
    <div className="flex items-center gap-4 mb-8 mt-12 pb-4 border-b border-slate-200">
      <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
        {step}
      </div>
      <h3 className="font-heading text-2xl text-slate-900 font-bold">{title}</h3>
    </div>
  )

  return (
    <div ref={sectionRef}>
      {/* ════════ PAGE HERO ════════ */}
      <section className="relative pt-40 pb-24 bg-brand-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Volunteer Application" 
            className="w-full h-full object-cover opacity-20 filter saturate-[1.2] brightness-50"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/80 to-brand-secondary" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 text-brand-primary text-xs font-bold tracking-[0.2em] uppercase">
            Join Our Team
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Volunteer <span className="text-brand-primary">Application</span>
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Thank you for your interest in volunteering with Community Witnesses CIC. 
            Please complete the form below to begin your journey with us.
          </p>
        </div>
      </section>

      {/* ════════ FORM CONTENT ════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 reveal">
          
          {submitted ? (
            <div className="bg-white p-12 lg:p-16 text-center rounded-3xl border border-slate-200 shadow-xl">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                <CheckCircle size={40} />
              </div>
              <h2 className="font-heading text-3xl text-slate-900 mb-4 font-bold">Application Received!</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. We have successfully received your volunteer application. 
                Our team will review your details and get back to you shortly.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="btn-primary"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl">
              
              <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-4 text-blue-800">
                <Info className="shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  Please ensure all information provided is accurate. Fields marked with an asterisk (<span className="text-brand-primary font-bold">*</span>) are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Personal Details */}
                <SectionTitle step="1" title="Personal Details" />
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Full Name" name="fullName" />
                  <InputField label="Date of Birth" name="dateOfBirth" type="date" />
                  <InputField label="Phone Number" name="phoneNumber" type="tel" />
                  <InputField label="Email Address" name="emailAddress" type="email" />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <InputField label="Address" name="address" />
                  </div>
                  <InputField label="Postcode" name="postcode" />
                </div>

                {/* 2. Emergency Contact */}
                <SectionTitle step="2" title="Emergency Contact" />
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Contact Name" name="emergencyName" />
                  <InputField label="Relationship to You" name="emergencyRelationship" />
                  <InputField label="Phone Number" name="emergencyPhone" type="tel" />
                </div>

                {/* 3. About You */}
                <SectionTitle step="3" title="About You" />
                <InputField 
                  label="Why would you like to volunteer with Community Witnesses CIC?" 
                  name="whyVolunteer" 
                  type="textarea" 
                />
                <InputField 
                  label="What skills or experience do you bring?" 
                  name="skillsExperience" 
                  type="textarea" 
                />
                <InputField 
                  label="Any lived experience relevant to this role?" 
                  name="livedExperience" 
                  type="textarea" 
                  required={false}
                  options={{ optional: true }}
                />

                {/* 4. Availability */}
                <SectionTitle step="4" title="Availability" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['daytime', 'evening', 'weekends', 'flexible'].map((time) => (
                    <label key={time} className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                      <input 
                        type="checkbox" 
                        name={time} 
                        checked={formData.availability[time]}
                        onChange={handleChange}
                        className="w-5 h-5 text-brand-primary border-slate-300 rounded focus:ring-brand-primary/20"
                      />
                      <span className="capitalize font-medium text-slate-700">{time}</span>
                    </label>
                  ))}
                </div>

                {/* 5. Training & Requirements */}
                <SectionTitle step="5" title="Training & Requirements" />
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-700 block">Are you willing to complete mandatory training? <span className="text-brand-primary">*</span></label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mandatoryTraining" value="yes" required onChange={handleChange} className="w-4 h-4 text-brand-primary focus:ring-brand-primary/20" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mandatoryTraining" value="no" required onChange={handleChange} className="w-4 h-4 text-brand-primary focus:ring-brand-primary/20" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-700 block">Are you willing to undergo a free DBS check? <span className="text-brand-primary">*</span></label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="freeDBSCheck" value="yes" required onChange={handleChange} className="w-4 h-4 text-brand-primary focus:ring-brand-primary/20" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="freeDBSCheck" value="no" required onChange={handleChange} className="w-4 h-4 text-brand-primary focus:ring-brand-primary/20" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* 6. Health & Safety */}
                <SectionTitle step="6" title="Health & Safety" />
                <InputField 
                  label="Any health conditions we should be aware of for safety purposes?" 
                  name="healthConditions" 
                  type="textarea" 
                  required={false}
                  options={{ optional: true }}
                />

                {/* 7. Reference */}
                <SectionTitle step="7" title="Reference" />
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Reference Name" name="refName" />
                  <InputField label="Relationship to You" name="refRelationship" />
                  <InputField label="Phone Number" name="refPhone" type="tel" />
                  <InputField label="Email Address" name="refEmail" type="email" />
                </div>

                {/* 8. Identity Verification */}
                <div id="id-upload-section">
                  <SectionTitle step="8" title="Identity Verification" />
                </div>
                <div className="space-y-6">
                  {fileError && (
                    <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl font-medium">
                      {fileError}
                    </div>
                  )}
                  
                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                    <p className="text-sm text-slate-600">Please upload one valid form of ID for identity and DBS verification. Accepted ID types:</p>
                    <ul className="text-sm font-medium text-slate-800 grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside">
                      <li>Passport</li>
                      <li>Driving Licence</li>
                      <li>National ID Card</li>
                      <li>Birth Certificate</li>
                      <li>Biometric Residence Permit</li>
                    </ul>
                    
                    <div className="mt-6">
                      <label className="block w-full cursor-pointer">
                        <span className="sr-only">Choose ID photo</span>
                        <div className="w-full flex items-center justify-center gap-3 border-2 border-dashed border-slate-300 rounded-xl p-8 hover:bg-slate-100 hover:border-brand-primary transition-colors text-slate-500 hover:text-brand-primary">
                          <Upload size={24} />
                          <span className="font-semibold">
                            {files.idProof ? files.idProof.name : 'Upload your ID here'}
                          </span>
                        </div>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*,.pdf" 
                          required 
                          onChange={(e) => handleFileChange(e, 'idProof')} 
                        />
                      </label>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                    <label className="block w-full cursor-pointer">
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-slate-700 block">Proof of Address (Optional)</span>
                        <span className="text-xs text-slate-500">Utility bill, bank statement, or council tax bill – dated within last 3 months</span>
                      </div>
                      <div className="w-full flex items-center justify-center gap-3 border-2 border-dashed border-slate-300 rounded-xl p-6 hover:bg-slate-100 hover:border-brand-primary transition-colors text-slate-500 hover:text-brand-primary">
                        <Upload size={20} />
                        <span className="font-medium">
                          {files.addressProof ? files.addressProof.name : 'Upload proof of address'}
                        </span>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*,.pdf" 
                        onChange={(e) => handleFileChange(e, 'addressProof')} 
                      />
                    </label>
                  </div>
                </div>

                {/* 9. Declaration */}
                <SectionTitle step="9" title="Declaration" />
                <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-800 mb-4">I confirm that:</p>
                  
                  {[
                    { id: 'confirmTrue', text: 'The information I have supplied in this application is true, complete, and accurate.' },
                    { id: 'consentData', text: 'I consent to Community Witnesses CIC processing and storing my personal data as required for volunteer recruitment, safeguarding, DBS checks, training, deployment, and lawful organisational purposes.' },
                    { id: 'understandGDPR', text: 'I understand my data will be handled in accordance with UK GDPR and the Data Protection Act 2018.' },
                    { id: 'understandRights', text: 'I understand my rights regarding access, correction, and deletion of my data.' }
                  ].map((item) => (
                    <label key={item.id} className="flex items-start gap-4 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name={item.id} 
                        required 
                        checked={formData[item.id]}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 text-brand-primary border-slate-300 rounded focus:ring-brand-primary/20"
                      />
                      <span className="text-sm text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                        {item.text} <span className="text-brand-primary">*</span>
                      </span>
                    </label>
                  ))}
                </div>

                <div className="pt-10 border-t border-slate-200">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                  <p className="mt-6 text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-emerald-500" /> Secure and encrypted submission
                  </p>
                </div>

              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
