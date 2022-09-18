<template>
  <div
    class="container"
    v-if="$store.state.current < $store.state.questions.length"
  >
    <UpperBar />
    <Header />
    <Ratings />
    <Questions />
    <Options />

    <NextBtn />
    <LowerBar />
  </div>

  <Restart v-else />
</template>

<script>
import {
  UpperBar,
  LowerBar,
  Ratings,
  Questions,
  Header,
  NextBtn,
  Options,
  Restart,
} from "./components";

export default {
  name: "App",
  components: {
    UpperBar,
    LowerBar,
    Ratings,
    Questions,
    Header,
    Options,
    NextBtn,
    Restart,
  },
};
</script>

