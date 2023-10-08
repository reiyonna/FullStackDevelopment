function generateInvoice(model, price, features) {
    const financialDetails = getFinancialDetails(model);
    
    const invoiceContent = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Invoice</title>
            <style>
                /* Add your custom styles here */
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #f4f4f4;
                    padding: 20px;
                }

                .invoice {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    margin: 0 auto;
                }

                .invoice h2 {
                    color: #333;
                    border-bottom: 2px solid #ccc;
                    padding-bottom: 10px;
                }

                .invoice-details {
                    margin-top: 20px;
                }

                .invoice-details p {
                    margin: 5px 0;
                    color: #666;
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                }

                .invoice-details strong {
                    font-weight: bold;
                    margin-left: 5px; /* Add margin for better separation */
                }

                .car-details {
                    margin-top: 20px;
                }

                .financial-details {
                    margin-top: 20px;
                }

                .financial-details p {
                    margin: 5px 0;
                    color: #666;
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                }

                .financial-details strong {
                    font-weight: bold;
                    margin-left: 5px; /* Add margin for better separation */
                }
            </style>
        </head>

        <body>
            <div class="invoice">
                <h2>Invoice for ${model}</h2>
                <div class="invoice-details">
                    <p><span>Price:</span> <strong>${price}</strong></p>
                    <h3>Features:</h3>
                    <ul>
                        ${features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>

                <div class="car-details">
                    <h3>Financial Details:</h3>
                    <div class="financial-details">
                        ${financialDetails}
                    </div>
                </div>
            </div>
        </body>

        </html>
    `;

    const invoiceWindow = window.open();
    invoiceWindow.document.write(invoiceContent);
}

function getFinancialDetails(model) {
    switch (model) {
        case 'BMW Z4 M40i':
            return `
                <p><span>Ex-showroom:</span> <span class="amount">₹ 89,30,000</span></p>
                <p><span>Trade-in Value of existing car:</span> <span class="amount">₹ 18,98,293</span></p>
                <p><span>Addl. Downpayment:</span> <span class="amount">₹ 19,00,000</span></p>
                <p><span>Finance Amount:</span> <span class="amount">₹ 66,47,463</span></p>
                <p><span>Tenure:</span> <span class="amount">48 months</span></p>
                <p><span>Mileage:</span> <span class="amount">10,000 kms</span></p>
                <p><span>Assured Buyback Amount:</span> <span class="amount">₹ 41,07,800</span></p>
                <p><span>Monthly Payment:</span> <span class="amount">₹ 1,04,999</span></p>
            `;
        case 'BMW X3 M40i':
            return `
                <p><span>Ex-showroom:</span> <span class="amount">₹ 87,70,000</span></p>
                <p><span>Trade-in Value of existing car:</span> <span class="amount">₹ 21,66,078</span></p>
                <p><span>Addl. Downpayment:</span> <span class="amount">₹ 21,00,000</span></p>
                <p><span>Finance Amount:</span> <span class="amount">₹ 63,53,088</span></p>
                <p><span>Tenure:</span> <span class="amount">48 months</span></p>
                <p><span>Mileage:</span> <span class="amount">10,000 kms</span></p>
                <p><span>Assured Buyback Amount:</span> <span class="amount">₹ 39,46,500</span></p>
                <p><span>Monthly Payment:</span> <span class="amount">₹ 99,999</span></p>
            `;
        case 'BMW M4 Competition Coupe with M xDRIVE':
            return `
                <p><span>Ex-showroom:</span> <span class="amount">₹ 1,47,50,000</span></p>
                <p><span>Trade-in Value of existing car:</span> <span class="amount">₹ 38,03,515</span></p>
                <p><span>Addl. Downpayment:</span> <span class="amount">₹ 38,50,000</span></p>
                <p><span>Finance Amount:</span> <span class="amount">₹ 96,12,085</span></p>
                <p><span>Tenure:</span> <span class="amount">48 months</span></p>
                <p><span>Mileage:</span> <span class="amount">10,000 kms</span></p>
                <p><span>Assured Buyback Amount:</span> <span class="amount">₹ 60,47,500</span></p>
                <p><span>Monthly Payment:</span> <span class="amount">₹ 1,49,999</span></p>
            `;
        case 'BMW 7 SERIES SEDAN':
            return `
                <p><span>Ex-showroom:</span> <span class="amount">₹ 1,70,00,000</span></p>
                <p><span>Trade-in Value of existing car:</span> <span class="amount">₹ 37,49,962</span></p>
                <p><span>Addl. Downpayment:</span> <span class="amount">₹ 38,00,000</span></p>
                <p><span>Finance Amount:</span> <span class="amount">₹ 1,21,42,694</span></p>
                <p><span>Tenure:</span> <span class="amount">48 months</span></p>
                <p><span>Mileage:</span> <span class="amount">10,000 kms</span></p>
                <p><span>Assured Buyback Amount:</span> <span class="amount">₹ 83,30,000</span></p>
                <p><span>Monthly Payment:</span> <span class="amount">₹ 1,77,777</span></p>
            `;
        default:
            return '';
    }
}

