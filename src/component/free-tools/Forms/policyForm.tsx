import React, { useState, ChangeEvent, FormEvent } from 'react'

type FormData = {
  website: string
  name: string
  email: string
}

type Errors = {
  website?: string
  name?: string
  email?: string
}

export default function PolicyForm() {
  const [formData, setFormData] = useState<FormData>({
    website: '',
    name: '',
    email: '',
  })

  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validate(formData)
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data
      console.log('Form data:', formData)
    } else {
      setErrors(errors)
    }
  }

  const validate = (data: FormData): Errors => {
    const errors: Errors = {}

    // Website validation
    if (!data.website) {
      errors.website = 'Website is required'
    } else if (!isValidUrl(data.website)) {
      errors.website = 'Invalid website URL'
    }

    // Name validation
    if (!data.name) {
      errors.name = 'Name is required'
    }

    // Email validation
    if (!data.email) {
      errors.email = 'Email is required'
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  const isValidUrl = (url: string) => {
    // Basic URL validation, you can use a more robust solution if needed
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url)
  }

  const isValidEmail = (email: string) => {
    // Basic email validation, you can use a more robust solution if needed
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          {errors.website && <span className="text-red-500">{errors.website}</span>}
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}