import React from "react";
import "./Yagoraninedir.css"

const Yagoraninedir = () => {

    const imgSrcErkek = require("../img/erkek.png")
    const imgSrcKadin = require("../img/kadin.png")

    return <div className="yagorani-container">
        <div className="yagorani-card">
            <div>
                <h4>Yağ oranı nedir?</h4>
                <p>Vücut Yağ Oranı, kişinin toplam vücut yağının toplam vücut ağırlığına oranıdır. Vücut Yağ Oranı size vücudunuzdaki yağın gerçek ağırlığının bilgisini verir.</p>
                <p>*Hesaplayıcıda esas alınan parametreler, ABD Donanması tarafından geliştirilmiş olup hala kuruma hizmet üyesi alımında kullanılmaktadır. Bu yöntem, günümüzde fitness alanında da en çok tercih edilen basit yağ oranı hesaplama yöntemleri arasında yer almaktadır.</p>
                <p>Vücut Yağ oranı için gerekli bilgiler kilo, boy; bel, boyun, kalça (sadece kadınlar için) çevresi ölçümleridir. Bel çevresi ölçümü belin en ince yerinden, boyun ölçümü adem elması üzerinden, kalça en kalın bölgeden ölçülmelidir. Buna göre vücut yağ oranı, ABD Donanmasınca uygulanan yönteme göre şu denklem üzerinden hesaplanıyor:</p>
                <h3>Erkekler için;</h3>
                <img src={imgSrcErkek} alt="" />
                <h3>Kadınlar için;</h3>
                <img src={imgSrcKadin} alt="" />
            </div>


        </div>


    </div>;
};

export default Yagoraninedir;
