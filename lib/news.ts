export const newsArticles = [
  {
    slug: "saudi-arabia-opens-theme-park-as-kingdom-pushes-ahead-with-mega-events",
    title:
      "Saudi Arabia opens theme park as kingdom pushes ahead with mega events",
    date: "14 Jan 2026",
    image: "/uploads/dc89d39543197b97.avif",
    content: `
      <p>Saudi Arabia is now home to the world’s tallest and fastest rollercoaster after US-based Six Flags opened its first theme park outside North America in the kingdom.</p>
      <p><br /></p>
      <p>The successful 1bn construction of Six Flags Qiddiya City is a step forward for the country’s rulers after a series of its futuristic gigaevents have been hit by setbacks.</p>
      <p><br /></p>
      <p>The park is the first operational part of Qiddiya, a vast entertainment and sports complex located on a desert mountain cliff on the outskirts of Riyadh. The site is also eventually set to include a Formula 1 racetrack, a World Cup stadium and a performing arts centre.</p>
      <p><br /></p>
      <p>Qiddiya is owned by the Public Investment Fund (PIF), the kingdom’s sovereign wealth fund, which Crown Prince Mohammed bin Salman has used as the main vehicle for an ambitious reform programme aimed at diversifying Saudi Arabia’s economy and lessening its dependence on oil revenues.</p>
      <p><br /></p>
      <p>The complex is one of five gigaevents that seek to help the diversification push by investing in promising new sectors for the country, such as tourism and entertainment.</p>
      <p><br /></p>
      <p>As Saudi Arabia’s finances came under pressure in recent years due to lower oil prices, authorities have had to recalibrate plans and reconsider spending priorities, with the kingdom under pressure to meet deadlines ahead of hosting major events, including Expo 2030 and the 2034 Fifa World Cup.</p>
    `,
  },
  {
    slug: "saudi-arabia-opens-theme-park-as-kingdom-pushes-ahead-with-mega-events-2",
    title:
      "Saudi Arabia opens  theme park as kingdom pushes ahead with mega events",
    date: "19 Jan 2026",
    image: "/uploads/5f2821243f54c140.jpg",
    content: `
      <p><span style="color: rgb(69, 76, 96);">Stay updated with the latest from Energizese, a specialized mechanical services firm delivering excellence across Industrial, Commercial, and Residential events.Stay updated with the latest from Energizese, a specialized mechanical services firm delivering excellence across Industrial, Commercial, and Residential events.</span></p>
    `,
  },
] as const;

export function getArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
