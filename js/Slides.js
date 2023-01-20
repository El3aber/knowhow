const createEleWithClass = (tag, className) => {
  const ele = document.createElement(tag);
  ele.className = className;
  return ele;
};

class Slides {
  constructor(data) {
    this.data = data;
    this.container = createEleWithClass("div", "slides");
    this.currentIdx = 0;
    this.slides = this.data.map((entry, index) => {
      const slide = createEleWithClass("div", "slide");
      const title = createEleWithClass("h1", "slide-title");
      const meta = createEleWithClass("p", "slide-meta");
      const more = createEleWithClass("h3", "slide-more");
      const heena = createEleWithClass("h1", "slide-heena");
      const noheetoka = createEleWithClass("h1", "slide-noheetoka");
      const kaddamna = createEleWithClass("h1", "slide-kaddamna");
      const khadamat = createEleWithClass("p", "slide-khadamat");
      const takhteet = createEleWithClass("p", "slide-takhteet");
      const takhteett = createEleWithClass("p", "slide-takhteett");
      const sinaa = createEleWithClass("p", "slide-sinaa");
      const sinaaa = createEleWithClass("p", "slide-sinaaa");
      const edara = createEleWithClass("p", "slide-edara");
      const edaraa = createEleWithClass("p", "slide-edaraa");
      const tahseen = createEleWithClass("p", "slide-tahseen");
      const ketaba = createEleWithClass("p", "slide-ketaba");
      const arkam = createEleWithClass("p", "slide-arkam");
      const hakakna = createEleWithClass("p", "slide-hakakna");
      const zohor = createEleWithClass("p", "slide-zohor");
      const katabna = createEleWithClass("p", "slide-katabna");
      const mohtawa = createEleWithClass("p", "slide-mohtawa");
      const nafazna = createEleWithClass("p", "slide-nafazna");
      const graphic = createEleWithClass("p", "slide-graphic");
      const antjna = createEleWithClass("p", "slide-antjna");
      const maktaa = createEleWithClass("p", "slide-maktaa");
      const aalna = createEleWithClass("p", "slide-aalna");
      const molen = createEleWithClass("p", "slide-molen");
      const aladl = createEleWithClass("p", "slide-aladl");
      const aladllogo = createEleWithClass("div", "slide-aladllogo");
      const mosalaha = createEleWithClass("p", "slide-mosalaha");
      const mosalahalogo = createEleWithClass("div", "slide-mosalahalogo");
      const stc = createEleWithClass("p", "slide-stc");
      const stclogo = createEleWithClass("div", "slide-stclogo");
      const zamlia = createEleWithClass("div", "slide-zamlia");
      const emkan = createEleWithClass("div", "slide-emkan");
      const logo6 = createEleWithClass("div", "slide-logo6");
      const logo7 = createEleWithClass("div", "slide-logo7");
      const logo8 = createEleWithClass("div", "slide-logo8");
      const email = createEleWithClass("p", "slide-email");
      const emaill = createEleWithClass("p", "slide-emaill");
      const location = createEleWithClass("p", "slide-location");
      const locationn = createEleWithClass("p", "slide-locationn");
      const logo9 = createEleWithClass("div", "slide-logo9");
    


      more.href = "#";
      slide.classList.add(index !== 0 ? "next" : "show-meta");
      meta.innerHTML = entry.meta;
      title.innerHTML = entry.title;
      more.innerHTML = entry.more;
      heena.innerHTML = entry.heena;
      noheetoka.innerHTML = entry.noheetoka;
      kaddamna.innerHTML = entry.kaddamna;
      khadamat.innerHTML = entry.khadamat;
      takhteet.innerHTML = entry.takhteet;
      takhteett.innerHTML = entry.takhteett;
      sinaa.innerHTML = entry.sinaa;
      sinaaa.innerHTML = entry.sinaaa;
      edara.innerHTML = entry.edara;
      edaraa.innerHTML = entry.edaraa;
      tahseen.innerHTML = entry.tahseen;
      ketaba.innerHTML = entry.ketaba;
      arkam.innerHTML = entry.arkam;
      hakakna.innerHTML = entry.hakakna;
      zohor.innerHTML = entry.zohor;
      katabna.innerHTML = entry.katabna;
      mohtawa.innerHTML = entry.mohtawa;
      nafazna.innerHTML = entry.nafazna;
      graphic.innerHTML = entry.graphic;
      antjna.innerHTML = entry.antjna;
      maktaa.innerHTML = entry.maktaa;
      aalna.innerHTML = entry.aalna;
      molen.innerHTML = entry.molen;
      aladl.innerHTML = entry.aladl;
      aladllogo.innerHTML = entry.aladllogo;
      mosalaha.innerHTML = entry.mosalaha;
      mosalahalogo.innerHTML = entry.mosalahalogo;
      stc.innerHTML = entry.stc;
      stclogo.innerHTML = entry.stclogo;
      zamlia.innerHTML = entry.zamlia;
      emkan.innerHTML = entry.emkan;
      logo6.innerHTML = entry.logo6;
      logo7.innerHTML = entry.logo7;
      logo8.innerHTML = entry.logo8;
      email.innerHTML = entry.email;
      emaill.innerHTML = entry.emaill;
      location.innerHTML = entry.location;
      locationn.innerHTML = entry.locationn;
      logo9.innerHTML = entry.logo9;


      slide.appendChild(title);
      slide.appendChild(more);
      slide.appendChild(heena);
      slide.appendChild(meta);
      slide.appendChild(noheetoka);
      slide.appendChild(kaddamna);
      slide.appendChild(khadamat);
      slide.appendChild(takhteet);
      slide.appendChild(takhteett);
      slide.appendChild(sinaa);
      slide.appendChild(sinaaa);
      slide.appendChild(edara);
      slide.appendChild(edaraa);
      slide.appendChild(tahseen);
      slide.appendChild(ketaba);
      slide.appendChild(arkam);
      slide.appendChild(hakakna);
      slide.appendChild(zohor);
      slide.appendChild(katabna);
      slide.appendChild(mohtawa);
      slide.appendChild(nafazna);
      slide.appendChild(graphic);
      slide.appendChild(antjna);
      slide.appendChild(maktaa);
      slide.appendChild(aalna);
      slide.appendChild(molen);
      slide.appendChild(aladl);
      slide.appendChild(aladllogo);
      slide.appendChild(mosalaha);
      slide.appendChild(mosalahalogo);
      slide.appendChild(stc);
      slide.appendChild(stclogo);
      slide.appendChild(zamlia);
      slide.appendChild(emkan);
      slide.appendChild(logo6);
      slide.appendChild(logo7);
      slide.appendChild(logo8);
      slide.appendChild(email);
      slide.appendChild(emaill);
      slide.appendChild(location);
      slide.appendChild(locationn);
      slide.appendChild(logo9);

      
      this.container.appendChild(slide);
      
      return slide;
    });
  }
  mount(container) {
    container.appendChild(this.container);
  }
  onActiveIndexChange(activeIndex) {
    this.currentIdx = activeIndex;
    for (let i = 0; i < this.slides.length; i++) {
      if (activeIndex === i) {
        this.slides[i].classList.remove("next");
        this.slides[i].classList.remove("prev");
      } else {
        if (activeIndex > i) {
          this.slides[i].classList.remove("next");
          this.slides[i].classList.add("prev");
        } else {
          this.slides[i].classList.add("next");
          this.slides[i].classList.remove("prev");
        }
      }
    }
  }
  onMove(indexFloat) {
    this.container.style.transform = `translateY(${(indexFloat * 100) /
      this.slides.length}%)`;
  }
  appear() {
    this.container.classList.add("scrolling");
    this.slides[this.currentIdx].classList.remove("show-meta");
  }
  disperse(activeIndex) {
    //this.currentIdx = activeIndex;
    this.slides[this.currentIdx].classList.add("show-meta");
    this.container.classList.remove("scrolling");
    for (let index = 0; index < this.data.length; index++) {
      if (index > activeIndex) {
        this.slides[index].classList.add("next");
        this.slides[index].classList.remove("prev");
      } else if (index < activeIndex) {
        this.slides[index].classList.remove("next");
        this.slides[index].classList.add("prev");
      } else {
        this.slides[index].classList.remove("next");
        this.slides[index].classList.remove("prev");
      }
    }
  }
}

export {
  Slides
};