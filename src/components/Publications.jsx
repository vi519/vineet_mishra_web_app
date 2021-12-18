function Publications() {
  //  https://www.ijert.org/security-challenges-and-attacks-in-wireless-sensor-networks
  return (
    <div>
      <h1 class="text-4xl text-bold text-center py-4">
        My Published Contributions 📢
      </h1>
      <div class="flex flex-col justify-around md:flex-row">
        <a href="https://www.npmjs.com/package/epic-on-fhir-login">
          {" "}
          <div class="max-w-sm rounded overflow-hidden  hover:shadow-lg px-12 py-20 mb-4">
            <img src="https://cdn.worldvectorlogo.com/logos/npm.svg" alt="" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Epic on FHIR Package </div>
              <p class="text-gray-700 text-base">
                Epic on fhir npm package used for Auth 2.0 via epic on
              </p>
            </div>
          </div>
        </a>

        <a href="https://www.ijert.org/security-challenges-and-attacks-in-wireless-sensor-networks">
          {" "}
          <div class="max-w-sm rounded overflow-hidden  hover:shadow-lg px-12 py-20 mb-4">
            <img
              src="https://www.ijert.org/wp-content/uploads/2018/07/journal-of-engineering-research-logo.png"
              alt=""
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                Security Challenges and Attacks in Wireless Sensor Networks (1st
                Author)
              </div>
              <p class="text-gray-700 text-base">WSN TOPOLOGIES</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Publications;
