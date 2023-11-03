<script>
  import { Header } from "./header";

  let data;
  const setData = (newData) => {data = newData};
  const header = new Header(setData);
</script>

<style>@import url("./header.css");</style>


<!-- svelte-ignore component-name-lowercase -->
<header class="header flex-i-col" style={`zoom: ${data.zoom}`}>
  <div class="flex-i-col">
    <img
      class="logo"
      src={data.imageMap.editorLogo}
      alt="Captain Commando Readjusted Editor"
    />
    <img src={data.imageMap.mackPortrait} alt="Mack The Knife" />
    <img src={data.imageMap.captainPortrait} alt="Captain Commando" />
    <img src={data.imageMap.ginzuPortrait} alt="Ginzu" />
    <img src={data.imageMap.babyPortrait} alt="Baby Commando" />
  </div>
</header>