import React, { useState } from "react";
import "./Bmihesapla.css"




const Bmihesapla = () => {
    const [boy, setBoy] = useState(0)
    const [kilo, setKilo] = useState(0)
    const [mesaj, setMesaj] = useState('')
    const [vki, setVki] = useState('')

    let hesapla = (e) => {
        e.preventDefault()

        if (kilo === 0 && boy === 0) {
            alert("geçersiz değer")
        } else {
            let vki = (kilo / (boy * boy))
            setVki(vki.toFixed(1))
            let imgSrc = ""
            console.log(vki)
            if (1 <= vki && vki < 18.5) {
                setMesaj("Düşük kilo")
                imgSrc = require("../img/underweight.png")
            } else if (18.5 <= vki && vki < 24.9) {
                setMesaj("Normal kütle")
                imgSrc = require("../img/normal.png")
            } else if (24.9 <= vki && vki < 29.9) {
                setMesaj("aşırı kilo")
                imgSrc = require("../img/overweight.png")
            } else {
                setMesaj("obezite tehlikesi")
                imgSrc = require("../img/obese.png")
            }
            console.log(imgSrc)

        }
    }
    let imgSrc;

    if (vki < 1) {
        imgSrc = null;
    } else if (1 <= vki && vki < 18.5) {
        imgSrc = require("../img/underweight.png")
    } else if (18.5 <= vki && vki < 24.9) {
        imgSrc = require("../img/normal.png")
    } else if (24.9 <= vki && vki < 29.9) {
        imgSrc = require("../img/overweight.png")
    } else {
        imgSrc = require("../img/obese.png")
    }


    return <> <div className="container">
        <div className="card">
            <form onSubmit={hesapla} action="">
                <h2>Bmi hesaplama</h2>
                <h6>kilo(kg)</h6>
                <input type="number" value={kilo} onChange={(e) => {
                    setKilo(e.target.value)
                }} placeholder="kilo" />
                <h6>boy(m)</h6>
                <input type="number" value={boy} onChange={(e) => {
                    setBoy(e.target.value)
                }} placeholder="boy" />

                <button type="submit">hesapla</button>
                <button>temizle</button>
            </form>
            <div className="mesaj-container">
                <h3>Vücud kitle indeksin:</h3>
                <h1>{mesaj}</h1>
            </div>
            <div className="img-container">
                <img src={imgSrc} alt="" />
            </div>
        </div>
    </div>
    </>
};

export default Bmihesapla;
