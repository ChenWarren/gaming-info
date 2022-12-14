/** @type {import('./$types').Actions} */
export const actions = {
    submitContact: async ({request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const company = data.get('company');
        const message = data.get('message');

        console.log(name, email, company, message);

        return { success: true };
    }
}