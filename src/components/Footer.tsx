
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-earth-900 text-earth-100 relative">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      {/* Wood grain texture overlay for background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/wood-texture.jpg')] bg-cover mix-blend-overlay"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Slogan and About Section - 5 columns on large screens */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-8 transition-all duration-500 hover:transform hover:scale-[1.01]">
              <Logo size={32} className="mb-6 text-eco-300" />
              <h2 className="text-3xl font-bold text-earth-200 leading-tight mb-4 font-playfair">
                Juntos, <br />
                construindo <br />
                um futuro <br />
                mais sustentável
              </h2>
              
              
            </div>
          </div>
          
          {/* Location and Contact Section - 4 columns on large screens */}
          <div className="lg:col-span-4 text-left">
            <h3 className="flex items-center gap-2 text-eco-300 font-semibold mb-6 text-lg border-b border-earth-700 pb-2">
              <MapPin size={18} className="text-eco-500" />
              Nosso Localização e Contato
            </h3>
            
            <div className="space-y-6">
              {/* Pernambuco */}
              <div className="p-3 rounded-lg hover:bg-earth-800/60 transition-colors duration-300">
                <h4 className="font-semibold text-earth-300 font-playfair">Pernambuco</h4>
                <div className="mb-2">
                  <a 
                    href="https://maps.google.com/?q=Rua+Ana+Granja+Arraes,+03,+Santo+Expedito,+Araripina+-+PE" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block hover:text-eco-300 transition-colors group flex items-center gap-1.5" 
                    title="Ver no Google Maps"
                  >
                    <MapPin size={14} className="text-eco-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm group-hover:underline text-earth-400">Rua Ana Granja Arraes, 03</p>
                      <p className="text-sm group-hover:underline text-earth-400">Santo Expedito, Araripina - PE</p>
                    </div>
                    <span className="inline-flex items-center justify-center text-xs bg-earth-800 p-1.5 rounded text-eco-300 ml-1 w-6 h-6">
                      <MapPin size={14} />
                    </span>
                  </a>
                </div>
                <a 
                  href="https://wa.me/5581987444687" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm flex items-center gap-1.5 mt-2 hover:text-eco-300 transition-colors text-earth-400 group" 
                  title="Conversar pelo WhatsApp"
                >
                  <MessageCircle size={14} className="text-eco-500" />
                  (81) 9874-4687
                  <span className="text-xs bg-earth-800 px-1.5 py-0.5 rounded text-eco-300 ml-1 group-hover:bg-earth-700">falar no whatsapp</span>
                </a>
              </div>
              
              {/* Ceará */}
              <div className="p-3 rounded-lg hover:bg-earth-800/60 transition-colors duration-300">
                <h4 className="font-semibold text-earth-300 font-playfair">Ceará</h4>
                <div className="mb-2">
                  <a 
                    href="https://maps.google.com/?q=Rua+Maria+Balbino+da+Conceição,+503,+Jardim+-+CE" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block hover:text-eco-300 transition-colors group flex items-center gap-1.5" 
                    title="Ver no Google Maps"
                  >
                    <MapPin size={14} className="text-eco-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm group-hover:underline text-earth-400">Rua Maria Balbino da Conceição,</p>
                      <p className="text-sm group-hover:underline text-earth-400">503, Jardim - CE</p>
                    </div>
                    <span className="inline-flex items-center justify-center text-xs bg-earth-800 p-1.5 rounded text-eco-300 ml-1 w-6 h-6">
                      <MapPin size={14} />
                    </span>
                  </a>
                </div>
                <a 
                  href="https://wa.me/5588981238818" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm flex items-center gap-1.5 mt-2 hover:text-eco-300 transition-colors text-earth-400 group" 
                  title="Conversar pelo WhatsApp"
                >
                  <MessageCircle size={14} className="text-eco-500" />
                  (88) 9 8123-8818
                  <span className="text-xs bg-earth-800 px-1.5 py-0.5 rounded text-eco-300 ml-1 group-hover:bg-earth-700">falar no whatsapp</span>
                </a>
              </div>
              
              {/* Rio Grande do Norte */}
              <div className="p-3 rounded-lg hover:bg-earth-800/60 transition-colors duration-300">
                <h4 className="font-semibold text-earth-300 font-playfair">Rio Grande do Norte</h4>
                <div className="mb-2">
                  <a 
                    href="https://maps.google.com/?q=Av.+Olavo+Lacerda+Montenegro,+2835,+Central+Park+II,+Parnamirim+-+RN" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block hover:text-eco-300 transition-colors group flex items-center gap-1.5" 
                    title="Ver no Google Maps"
                  >
                    <MapPin size={14} className="text-eco-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm group-hover:underline text-earth-400">Av. Olavo Lacerda Montenegro, 2835,</p>
                      <p className="text-sm group-hover:underline text-earth-400">Central Park II, Parnamirim - RN</p>
                    </div>
                    <span className="inline-flex items-center justify-center text-xs bg-earth-800 p-1.5 rounded text-eco-300 ml-1 w-6 h-6">
                      <MapPin size={14} />
                    </span>
                  </a>
                </div>
                <a 
                  href="https://wa.me/5584988147400" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm flex items-center gap-1.5 mt-2 hover:text-eco-300 transition-colors text-earth-400 group" 
                  title="Conversar pelo WhatsApp"
                >
                  <MessageCircle size={14} className="text-eco-500" />
                  (84) 9 8814-7400
                  <span className="text-xs bg-earth-800 px-1.5 py-0.5 rounded text-eco-300 ml-1 group-hover:bg-earth-700">falar no whatsapp</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Links and Social Media Section - 3 columns on large screens */}
          <div className="lg:col-span-3 text-left">
            {/* Social Media Section */}
            <div className="mb-6 transition-all duration-300">
              <h3 className="text-eco-300 font-semibold mb-4 text-lg border-b border-earth-700 pb-2">
                Nossas redes
              </h3>
              
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/eco-l%C3%B3gica-brasil-ltda-eco-l%C3%B3gica-tem-uma-conta" target="_blank" rel="noopener noreferrer" className="text-eco-500 hover:text-eco-300 bg-earth-800/50 hover:bg-earth-700 p-2 rounded-full transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/brasilecologica/" target="_blank" rel="noopener noreferrer" className="text-eco-500 hover:text-eco-300 bg-earth-800/50 hover:bg-earth-700 p-2 rounded-full transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-eco-500 hover:text-eco-300 bg-earth-800/50 hover:bg-earth-700 p-2 rounded-full transition-all duration-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            {/* Links Section */}
            <div className="space-y-3">
              <h3 className="text-eco-300 font-semibold mb-4 text-lg border-b border-earth-700 pb-2">
                Links Rápidos
              </h3>
              
              <a href="#" className="flex items-center text-earth-400 font-medium text-sm hover:text-eco-300 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Portfólios
              </a>
              <a href="#contact" className="flex items-center text-earth-400 font-medium text-sm hover:text-eco-300 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Fale com nossos consultores
              </a>
              <a href="#" className="flex items-center text-earth-400 font-medium text-sm hover:text-eco-300 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Política de Privacidade
              </a>
              <a href="#" className="flex items-center text-earth-400 font-medium text-sm hover:text-eco-300 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Outros
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-earth-800 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-earth-500 text-sm text-center font-playfair">
            © {currentYear} Eco-lógica Brasil - Todos os direitos Reservados
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
