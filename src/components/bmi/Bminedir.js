import React from "react";
import "./Bminedir.css"

const Bminedir = () => {
    return <div className="bmi-container">
        <div className="card-container">
            <div className="sol">
                <h4>Vücut kitle indeksi nedir?</h4>
                <p>Vücut kitle indeksi (VKİ), vücut kütlesinin (kg), uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. İdeal ağırlık ise ulaşılmak istenen VKİ'nin, boy uzunluğunun karesi ile çarpılmasıyla elde edilir.</p>
                <p> Vücut kitle indeksi hesaplamasında yağ oranı, vücut tipi, yağ ve kas dokusu gibi etmenler yer almaz. Bu nedenle, uzmanlar ideal kilo hesaplamada beden kitle indeksi ve bel çevresinin ölçümü dışında, metabolizma hızı ölçümü ve detaylı vücut analizleriyle de kişinin eğer kilo sorunu hakkında daha ayrıntılı bilgi elde ederler. Kişinin ideal kilosunun altında ya da üstünde olması; diğer etmenlerle birlikte hekim tarafından değerlendirilmelidir. Mevcut sağlık sorunlarını gidermek ve olası sağlık sorunlarını önlemek için hekimle birlikte hareket edilmelidir.

                </p>
            </div>
            <div className="sag">
                <p>0-18.5 aralığında <span className="dusuk">düşük kilo</span></p>
                <p>18.5-24.9 aralığında <span className="normal">normal kilo</span></p>
                <p>24.9-29.9 aralığında <span className="fazla">fazla kilo</span></p>
                <p>29.9 ve üzeri <span className="obezite">obezite tehlikesi</span></p>
            </div>
        </div>
    </div>;
};

export default Bminedir;
