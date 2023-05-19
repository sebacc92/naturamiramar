import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function MyWebsite() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100%'}}>
            <iframe 
                src="https://ar.natura.digital-catalogue.com/ar/2023/08/revista/ciclo-08/view/index.html?id_consultora=&fbclid=IwAR2zircPJ2rFEhArnbOeGHX0-PMn3BuwKJQQQMCeJhoMc9Ag535IvuoOxOQ&page=1" 
                style={{flexGrow: 1, width: '100%', border: '0'}}
                title="Natura Catalogue"
            />
            <div style={{padding: '1em', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                <h1>Bienvenido/a a nuestro catálogo de productos Natura</h1>
                <p>Te invitamos a descubrir y comprar nuestros productos en Miramar, Buenos Aires.</p>
                <p>Contacta a Daiana Lentz a través de WhatsApp al: <a href="https://wa.me/542213096805"><FaWhatsapp color="#25D366" size="1.5em" /> 2213 09-6805</a></p>
            </div>
        </div>
    );
}

export default MyWebsite;
