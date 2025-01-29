import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        return json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: 'Your Website <no-reply@yourdomain.com>',
            to: ['your-email@example.com'],
            subject: `New message from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });
        return json({ success: true });
    } catch (error) {
        return json({ success: false, error: 'Failed to send message' }, { status: 500 });
    }
}; 