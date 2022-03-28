(() => {

  const shields = document.querySelectorAll('.teamPhoto'),
  teamInfo = document.querySelector('.textBio');

  let currentHouse = '';

    const teamText = [
      `Leader and creative of the team with high experience in graphic design, branding and communications, his world is visual and aesthetic; that of ideas and desire to learn new things among them: English... how is it possible that with your level of English you have traveled to an English-speaking country?... because you have the courage added to the ability to learn and not stay in his "zona de fonfort" (comfort zone) added to a giant dream of getting new skills focused on the digital world that allows him to update himself to a new and changing world; dreamer, lover of super heroes (DC or Marvel!), proud father and husband.`,

      `The black sheep of the family... the member that the team wanted to get rid of but couldn't; he was given the great responsibility of leading the development role but it has been a fiasco falling behind in the world of CSS since JS is Mandarin for him; he didn't want to be shown but given the assignment there was no other choice... hopefully we can fire him soon and replace him with someone who does learn to code.`,

      `Who has not wanted to be so irresponsible as to drink until passing out and at the same time be so responsible for knowing that they are taking care of their oral hygiene while lying on the floor? TILEX with mouthwash has arrived to be the solution; thanks to their irreverence they had the courage (or madness) to get a creative team like us; a brand that represents fun and care at the same time, a celebration of the good life and friendship that is always accompanied by a smile.`,
    ]

  function animateBanners(){
    let offset = this.dataset.offset; getHouseText(this.classList, this.dataset.offset);

    currentHouse = this.classList[1];
  }

  function getHouseText(house, index) {
    console.log(house[1], index);

    teamInfo.textContent = teamText[index];
  }

  shields.forEach(shield => shield.addEventListener('click', animateBanners));

  animateBanners.call(shields[0]);

  })();
