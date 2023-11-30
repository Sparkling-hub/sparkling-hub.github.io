 
const header = (
  <h1 className="flex items-center justify-center 	">
    <span className="font-bold text-7xl mx-4">Start-up</span>{" "}
    <span className="text-7xl color-primary-light">Sheme</span> <br />
  </h1>
);

const content = (
  <>
    <p>
      OLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.{" "}
    </p>
    <br />
    <br />
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur?
    </p>
  </>
);

const image = <img src="/img/startup/startup_icon.png" className="w-full" alt="Startup" />;

const element = {
  content: content,
  header: header,
  image: image,
};
export default element;