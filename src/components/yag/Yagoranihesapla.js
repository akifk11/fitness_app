import React, { useState } from "react";
import "./Yagoranihesapla.css"

const Yagoranihesapla = () => {
    const [boy, setBoy] = useState();
    const [kilo, setKilo] = useState();
    const [boyunCev, setBoyunCev] = useState();
    const [belCev, setBelCev] = useState();
    const [yagmiktari, setYagMiktari] = useState(0);


    let yagorani
    const hesapla = (e) => {
        e.preventDefault()

        yagorani = Math.round((86.010 * Math.log10((belCev * 0.39) - (boyunCev * 0.39)) - 70.041 * Math.log10(boy * 0.39) + 36.76) * 10) / 10;
        setYagMiktari(yagorani)


    }

    let saglikdurumu
    if (yagmiktari < 1) {
        saglikdurumu = ""
    } else if (yagmiktari < 6) {
        saglikdurumu = "Yaşam için esansiyel yağ miktarı"

    } else if (6 <= yagmiktari && yagmiktari < 13) {
        saglikdurumu = "Sporcu yağ oranı"

    } else if (13 <= yagmiktari && yagmiktari < 17) {
        saglikdurumu = "Fit yağ oranı"

    } else if (17 <= yagmiktari && 24) {
        saglikdurumu = "Ortalama yağ oranı"

    } else {
        saglikdurumu = "Çok yağlı obez"
    }


    return (<div className="container-yag">
        <div className="card-yag">
            <form onSubmit={hesapla}>
                <div className="giris">
                    <label htmlFor="" >boy(cm)</label>
                    <input type="number" name="boy" value={boy} onChange={(e) => setBoy(e.target.value)} />
                </div>
                <div className="giris">
                    <label htmlFor="">kilo(kg)</label>
                    <input type="number" name="kilo" value={kilo} onChange={(e) => setKilo(e.target.value)} />
                </div>
                <div className="giris">
                    <label htmlFor="">boyun çevresi(cm)</label>
                    <input type="number" name="boyunCev" value={boyunCev} onChange={(e) => setBoyunCev(e.target.value)} />
                </div>
                <div className="giris">
                    <label htmlFor="">bel çevresi(cm)</label>
                    <input type="number" name="belCev" value={belCev} onChange={(e) => setBelCev(e.target.value)} />
                </div>
                <button className="yag-orani-btn" type="submit">Yağ Oranımı hesapla</button>
                <button>Sıfırla</button>

            </form>

            <h4>Yağ oranı yüzdesi: {yagmiktari}%</h4>
            <h4>{saglikdurumu}</h4>
        </div>
    </div>)
};

export default Yagoranihesapla;
