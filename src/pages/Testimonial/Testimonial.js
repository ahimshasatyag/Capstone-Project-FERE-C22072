import React from 'react'
import medical from '../images/medical.png'

const Testimonial = () => {
    return (
        <div className="container">
            <img src={medical} alt="medical" class="medical" />
            <p><b>Kami adalah Pelopor Sehat Mental di Indonesia</b><br></br> Sebagai one-stop aplikasi kesehatan mental pertama di Indonesia, Riliv mempunyai misi untuk memberikan kemudahan kepada semua orang dalam mengakses layanan kesehatan mental yang terintegratif.</p>
        </div>
    )
}
export default Testimonial;