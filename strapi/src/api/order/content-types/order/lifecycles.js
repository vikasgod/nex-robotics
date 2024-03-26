module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugin('email').service('email').send({
                to: result.email,
                from: 'noreply@gmail.com',
                subject: 'Your order placed successfully',
                // text: `Hello ${result.name}`,
                html: `
                <html>
                    <style>
                        table,
                        th,
                        td {
                            border: 1px solid black;
                        }
                    </style>
                    <body>
                        <h2>Hello ${result.name} Your order placed successfully</h2>

                        <table style="width:100%">
                            <tr>
                            <td>Order Id</td>
                            <td>${result.order_id}</td>
                            </tr>
                            <tr>
                            <td>Total Amount</td>
                            <td>${result.price}</td>
                            </tr>
                        </table>
                    </body>
                </html>
                `,
            });
        } catch (error) {
            console.error(error);
        }
    }
}