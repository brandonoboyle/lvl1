import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { json } from '@sveltejs/kit';

const resend = new Resend(RESEND_API_KEY);

export const prerender = false;

export async function POST({ request }) {
	const formData = await request.formData();

	try {
		const { data, error } = await resend.emails.send({
			from: 'send@osddemo.xyz',
			to: ['brandon.ohboil@icloud.com'],
			subject: 'New Contact Form Submission',
			html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${formData.get('name')}</p>
                <p><strong>Email:</strong> ${formData.get('email')}</p>
                <p><strong>Message:</strong> ${formData.get('message')}</p>
            `
		});

		if (error) {
			return json({ success: false, error: error.message }, { status: 500 });
		}

		return json({ success: true });
	} catch (err) {
		return json({ success: false, error: 'Failed to send email' }, { status: 500 });
	}
}
