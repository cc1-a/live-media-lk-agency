'use server'

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name') as string
  const company = formData.get('company') as string
  const contactMethod = formData.get('contactMethod') as string
  const contactDetail = formData.get('contactDetail') as string
  const message = formData.get('message') as string

  const formattedMessage = `New Contact Form Submission:
Name: ${name || 'N/A'}
Company: ${company || 'N/A'}
Contact Method: ${contactMethod} (${contactDetail || 'N/A'})
Explanation: ${message || 'N/A'}`

  const targetNumbers = ['94766226039', '94760967178']

  for (const number of targetNumbers) {
    try {
      await fetch('https://app.wabot.my/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: number,
          type: 'text',
          message: formattedMessage,
          instance_id: process.env.WA_INSTANCE_ID,
          access_token: process.env.WA_ACCESS_TOKEN
        })
      })
    } catch (e) {
      console.error('Failed to send message to', number, e)
    }
  }

  return { success: true }
}
