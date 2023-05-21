import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function MyWebsite() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100%'}}>
            <div id="container" style={{padding: '1em', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                <h1>Bienvenido/a a nuestro catálogo de productos Natura</h1>
                <p>Te invitamos a descubrir y comprar nuestros productos en Miramar, Buenos Aires.</p>
                <p>Contacta a <b>Daiana Lentz</b> a través de WhatsApp al: <a href="https://wa.me/542213096805"><FaWhatsapp color="#25D366" size="1.5em" /> 2213 09-6805</a></p>
            </div>
            <iframe 
                src="https://www.naturacosmeticos.com.ar/consultoria/daianaclentz" 
                style={{flexGrow: 1, width: '100%', border: '0'}}
                title="Natura Catalogue"
            />
        </div>
    );
}

export default MyWebsite;
