document.addEventListener("DOMContentLoaded", function () {
  const profiles = [
    {
      id: 1,
      name: "Amanda Monteiro",
      img: "./assets/photos/img1.png",
      contato: "digite as informações para contato",
      bio: "Olá! Eu sou Amanda Monteiro. Faço ciência da computação na Uninassau, com interesse na área de cibersegurança. Gosto de aprender coisas diferentes e sempre estou explorando novos tópicos. Estou sempre aberta a aprender mais, conquistando crescimento e desenvolvimento pessoal. ",
    },
    {
      id: 2,
      name: "Amanda Oliveira",
      img: "./assets/photos/img2.png",
      contato: "digite as informações para contato",
      bio: "Olá, me chamo Amanda Oliveira, atualmente estou cursando Ciência da Computação, sou apaixonada pela tecnologia desde a infância. Busco aumentar meus conhecimentos e crescer na área. Tenho conhecimento em HTML, CSS, Java, C e Banco de dados. Faço residência no Porto Digital, e aproveito para lapidar meus conhecimentos para desenvolvimento profissional e acadêmico.",
    },
    {
      id: 3,
      name: "Andrellyne Luiza",
      img: "./assets/photos/img3.jpg",
      contato: "digite as informações para contato",
      bio: "Olá, me chamo Andrellyne Luiza, sou formada em Análise em desenvolvimento de sistemas pelo Porto Digital, atualmente curso Sistemas de informação, tive a experiência de mexer um pouco em python, Java, Javascript, HTML e CSS. Trabalhei na área de marketing durante 1 ano, realizei curso de UX design pela Cesar School e UI design pela Deploy.Sou fascinada por design e programação e estou sempre em busca de novos desafios e conhecimentos pela área.",
    },
    {
      id: 4,
      name: "Kaillany francinny",
      img: "./assets/photos/img4.jpg",
      contato: "digite as informações para contato",
      bio: "Olá, sou Kaillany Francinny, estudante de Sistemas de Informação com interesse em segurança de dados. Estou focada em aprimorar minhas habilidades na área e busco o desenvolvimento contínuo. Ansiosa para participar de projetos desafiadores, acredito na importância de proteger dados e garantir sua integridade.",
    },
    {
      id: 5,
      name: "Larah Helloyse",
      img: "./assets/photos/img5.jpg",
      contato: "digite as informações para contato",
      bio: "Olá, me chamo Larah Helloyse, atualmente estou cursando Sistemas de Informação, sou apaixonada pela tecnologia e suas inovações. Busco aprimorar meus conhecimentos e crescer na área. Tenho experiência em Javascript, HTML e CSS, Java, Phyton. Trabalho no setor de TI da empresa Construtora Gabriel Barcelar. Estudante dedicada a aprender. Meu objetivo é continuar aperfeiçoando meus conhecimentos para o meu desenvolvimento profissional e acadêmico.",
    },
    {
      id: 6,
      name: "Rafaella Guedes",
      img: "./assets/photos/img6.jpg",
      contato: "digite as informações para contato",
      bio: "Olá, me chamo Rafaella Guedes estudante de Ciências da Computação com paixão pela tecnologia e design gráfico. Busco aprimorar minhas habilidades enquanto aplico princípios estéticos aprendidos em um curso de design gráfico. Comprometida com o aprendizado contínuo e ansiosa para contribuir com projetos desafiadores.",
    },
  ];

  const profilesContainer = document.getElementById("profilesContainer");

  profiles.forEach((profile) => {
    const imgFront = document.createElement("img");
    imgFront.src = profile.img;
    imgFront.alt = `${profile.name}`;
    const front = document.createElement("div");
    front.className = "front";
    front.appendChild(imgFront);
    const imgBack = document.createElement("img");
    imgBack.src = profile.img;
    imgBack.alt = `${profile.name}2`;
    const back = document.createElement("div");
    back.className = "back";
    back.appendChild(imgBack);
    const flipper = document.createElement("div");
    flipper.className = "flipper";
    flipper.appendChild(front);
    flipper.appendChild(back);
    const flipContainer = document.createElement("div");
    flipContainer.className = "flip-container";
    flipContainer.appendChild(flipper);

    const nameParagraph = document.createElement("h2");
    nameParagraph.textContent = profile.name;
    const bioParagraph = document.createElement("p");
    bioParagraph.textContent = profile.bio;

    const accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button";
    accordionButton.textContent = "Informações para contato";
    const contactInformation = document.createElement("p");
    contactInformation.textContent = profile.contato;
    const accordionContent = document.createElement("div");
    accordionContent.className = "accordion-content";
    accordionContent.appendChild(contactInformation);
    const accordion = document.createElement("div");
    accordion.className = "accordion";
    accordion.appendChild(accordionButton);
    accordion.appendChild(accordionContent);

    const bioDiv = document.createElement("div");
    bioDiv.className = "bio-div";
    bioDiv.appendChild(nameParagraph);
    bioDiv.appendChild(bioParagraph);
    bioDiv.appendChild(accordion);

    const profileDiv = document.createElement("div");
    profileDiv.id = `profile-${profile.id}`;
    profileDiv.className = "profile-container";
    profileDiv.appendChild(flipContainer);
    profileDiv.appendChild(bioDiv);

    profilesContainer.appendChild(profileDiv);
  });
});
