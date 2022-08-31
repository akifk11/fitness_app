import React, { useState } from "react";
import "./Yagoranihesapla.css"

const Yagoranihesapla = () => {
    const [boy, setBoy] = useState();
    const [boyunCev, setBoyunCev] = useState();
    const [belCev, setBelCev] = useState();
    const [yagmiktari, setYagMiktari] = useState(0);
    const [cinsiyet, setCinsiyet] = useState(true)
    const [kalcaCev, setKalcaCev] = useState()


    let yagorani
    const hesaplaErkek = (e) => {
        e.preventDefault()

        yagorani = Math.round((86.010 * Math.log10((belCev * 0.39) - (boyunCev * 0.39)) - 70.041 * Math.log10(boy * 0.39) + 36.76) * 10) / 10;
        setYagMiktari(yagorani)


    }
    const hesaplaKadin = (e) => {
        e.preventDefault()

        yagorani = Math.round((163.205 * Math.log10((belCev * 0.39) + (kalcaCev * 0.39) - (boyunCev * 0.39)) - 97.684 * Math.log10(boy * 0.39) - 78.387) * 10) / 10;
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

    } else if (17 <= yagmiktari && yagmiktari <= 24) {
        saglikdurumu = "Ortalama yağ oranı"

    } else if (24 < yagmiktari) {
        saglikdurumu = "Çok yağlı obez"
    }

    const sifirla = () => {
        setBelCev("")
        setBoy("")
        setBoyunCev("")
        setKalcaCev("")
        yagmiktari("0")
        saglikdurumu = ""
    }


    return (

        <div className="container-yag">
            <div></div>

            {cinsiyet ? <div className="card-yag">
                <div className="cinsiyet">
                    <button onClick={() => setCinsiyet(true)}>erkek</button>
                    <button onClick={() => setCinsiyet(false)}>kadın</button>
                </div>
                <form onSubmit={hesaplaErkek}>
                    <div className="giris">
                        <label htmlFor="" >boy(cm)</label>
                        <input type="number" placeholder="Boy ölçünüz(cm)" name="boy" value={boy} onChange={(e) => setBoy(e.target.value)} />
                    </div>

                    <div className="giris">
                        <label htmlFor="">boyun çevresi(cm)</label>
                        <input type="number" placeholder="Boyun çevresi ölçünüz(cm)" name="boyunCev" value={boyunCev} onChange={(e) => setBoyunCev(e.target.value)} />
                    </div>
                    <div className="giris">
                        <label htmlFor="">bel çevresi(cm)</label>
                        <input type="number" placeholder="Bel çevresi ölçünüz(cm)" name="belCev" value={belCev} onChange={(e) => setBelCev(e.target.value)} />
                    </div>
                    <button className="yag-orani-btn" type="submit">Yağ Oranımı hesapla</button>
                    <button onClick={() => sifirla()}>Sıfırla</button>

                </form>

                <h4>Yağ oranı yüzdesi: {yagmiktari}%</h4>
                <h4>{saglikdurumu}</h4>
            </div> :

                <div className="card-yag">
                    <div className="cinsiyet">
                        <button onClick={() => setCinsiyet(true)}>erkek</button>
                        <button onClick={() => setCinsiyet(false)}>kadın</button>
                    </div>

                    <form onSubmit={hesaplaKadin}>
                        <div className="giris">
                            <label htmlFor="" >boy(cm)</label>
                            <input type="number" placeholder="Boy ölçünüz(cm)" name="boy" value={boy} onChange={(e) => setBoy(e.target.value)} />
                        </div>

                        <div className="giris">
                            <label htmlFor="">boyun çevresi(cm)</label>
                            <input type="number" placeholder="Boyun çevresi ölçünüz(cm)" name="boyunCev" value={boyunCev} onChange={(e) => setBoyunCev(e.target.value)} />
                        </div>
                        <div className="giris">
                            <label htmlFor="">kalça çevresi(cm)</label>
                            <input type="number" placeholder="Boyun çevresi ölçünüz(cm)" name="kalcaCev" value={kalcaCev} onChange={(e) => setKalcaCev(e.target.value)} />
                        </div>
                        <div className="giris">
                            <label htmlFor="">bel çevresi(cm)</label>
                            <input type="number" placeholder="Bel çevresi ölçünüz(cm)" name="belCev" value={belCev} onChange={(e) => setBelCev(e.target.value)} />
                        </div>
                        <button className="yag-orani-btn" type="submit">Yağ Oranımı hesapla</button>
                        <button onClick={() => sifirla()}>Sıfırla</button>

                    </form>

                    <h4>Yağ oranı yüzdesi: {yagmiktari}%</h4>
                    <h4>{saglikdurumu}</h4>
                </div>}
        </div>)
};

export default Yagoranihesapla;
