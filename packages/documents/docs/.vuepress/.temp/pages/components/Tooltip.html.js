export const data = JSON.parse("{\"key\":\"v-5717f616\",\"path\":\"/components/Tooltip.html\",\"title\":\"Tooltip\",\"lang\":\"en-US\",\"frontmatter\":{\"PROPS\":[{\"name\":\"v-model\",\"type\":\"boolean\",\"values\":\"true,false\",\"description\":\"Determination if the component is active (visible).\",\"default\":false,\"link\":null,\"usage\":\"#content\",\"code\":null},{\"name\":\"color\",\"type\":\"String\",\"values\":\"Vuesax colors, RGB, HEX\",\"description\":\"Change the color of the tooltip.\",\"default\":\"text\",\"link\":null,\"usage\":\"#color\",\"code\":\"<vs-tooltip primary>\\n  <vs-button flat>\\n    Primary\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"left, right, bottom\",\"type\":\"Boolean\",\"values\":\"true,false\",\"description\":\"Change the position of the tooltip.\",\"default\":\"top\",\"link\":null,\"usage\":\"#position\",\"code\":\"<vs-tooltip left>\\n  <vs-button border>\\n    left\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"border\",\"type\":\"Boolean\",\"values\":\"true,false\",\"description\":\"Change the style of the tooltip by adding a border.\",\"default\":\"primary\",\"link\":null,\"usage\":\"#border\",\"code\":\"<vs-tooltip border>\\n  <vs-button transparent>\\n    Do hover here\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"border-thick\",\"type\":\"Boolean\",\"values\":\"true,false\",\"description\":\"Change the style of the tooltip by adding a thick border only at the arrow position.\",\"default\":false,\"link\":null,\"usage\":\"#border\",\"code\":\"<vs-tooltip color=\\\"#7d33ff\\\" border-thick>\\n  <vs-button color=\\\"#7d33ff\\\" transparent>\\n    Do hover here\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"square\",\"type\":\"Boolean\",\"values\":\"trie,false\",\"description\":\"Determine if the tooltip is rectangular without border-radius.\",\"default\":false,\"link\":null,\"usage\":\"#square\",\"code\":\"<vs-tooltip square>\\n  <vs-button square flat>\\n    Do hover here\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"circle\",\"type\":\"boolean\",\"values\":\"true,false\",\"description\":\"Change the border radius to 20px so that if it is a single line of text the corners are circular.\",\"default\":false,\"link\":null,\"usage\":\"#circle\",\"code\":\"<vs-tooltip circle>\\n  <vs-button circle flat>\\n    Do hover here\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"shadow\",\"type\":\"boolean\",\"values\":\"true,false\",\"description\":\"Change the style of the tooltip by adding a shadow and changing the background.\",\"default\":false,\"link\":null,\"usage\":\"#shadow\",\"code\":\"<vs-tooltip shadow>\\n  <vs-button flat>\\n    Do hover here\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"not-arrow\",\"type\":\"boolean\",\"values\":\"true,false\",\"description\":\"Remove the arrow from the tooltip.\",\"default\":false,\"link\":null,\"usage\":\"#not-arrow\",\"code\":\"<vs-tooltip not-arrow left>\\n  <vs-button border>\\n    left not-arrow\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"not-hover\",\"type\":\"boolean\",\"values\":\"true,false\",\"description\":\"The default tooltip is generated by doing hover on the parent element, that functionality is removed and no longer appears or disappears when doing hover.\",\"default\":false,\"link\":null,\"usage\":\"#content\",\"code\":\"<vs-tooltip bottom shadow not-hover v-model=\\\"activeTooltip1\\\">\\n  <vs-button danger @click=\\\"activeTooltip1=!activeTooltip1\\\">\\n    Click Delete User\\n  </vs-button>\\n  <template #tooltip>\\n    <div class=\\\"content-tooltip\\\">\\n      <h4 class=\\\"center\\\">\\n        Confirm\\n      </h4>\\n      <p>\\n        You are sure to delete this user, by doing so you cannot recover the data\\n      </p>\\n      <footer>\\n        <vs-button @click=\\\"activeTooltip1=false\\\" danger block>\\n          Delete\\n        </vs-button>\\n        <vs-button @click=\\\"activeTooltip1=false\\\" transparent dark block>\\n          Cancel\\n        </vs-button>\\n      </footer>\\n    </div>\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"interactivity\",\"type\":\"boolean\",\"values\":\"true,false\",\"description\":\"Determine if the tooltip is interactive and makes it possible to click without automatically hiding.\",\"default\":false,\"link\":null,\"usage\":\"#content\",\"code\":\"<vs-tooltip shadow interactivity>\\n  <vs-avatar>\\n    <img src=\\\"/avatars/avatar-5.png\\\" alt=\\\"\\\">\\n  </vs-avatar>\\n  <template #tooltip>\\n    <div class=\\\"content-tooltip\\\">\\n      <div class=\\\"body\\\">\\n        <div class=\\\"text\\\">\\n            Cosed Tasks\\n          <span>\\n          89\\n          </span>\\n        </div>\\n        <vs-avatar circle size=\\\"80\\\" @click=\\\"activeTooltip1=!activeTooltip1\\\">\\n          <img src=\\\"/avatars/avatar-5.png\\\" alt=\\\"\\\">\\n        </vs-avatar>\\n        <div class=\\\"text\\\">\\n            Open Tasks\\n          <span>\\n          8\\n          </span>\\n        </div>\\n      </div>\\n      <footer>\\n        <vs-button circle icon border>\\n          <i class='bx bxs-share-alt'></i>\\n        </vs-button>\\n        <vs-button circle>\\n          Message\\n        </vs-button>\\n        <vs-button circle icon border>\\n          <i class='bx bx-like' ></i>\\n        </vs-button>\\n      </footer>\\n    </div>\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"loading\",\"type\":\"boolean\",\"values\":\"true,false\",\"description\":\"Determine if the tooltip has a loading style and animation.\",\"default\":false,\"link\":null,\"usage\":\"#loading\",\"code\":\"<template>\\n  <div class=\\\"center\\\">\\n    <vs-tooltip loading>\\n      <vs-button flat>\\n        Do hover here loading\\n      </vs-button>\\n      <template #tooltip>\\n        This is a beautiful button\\n      </template>\\n    </vs-tooltip>\\n    <vs-tooltip loading>\\n      <vs-button flat>\\n        Do hover here loading\\n      </vs-button>\\n      <template #tooltip></template>\\n    </vs-tooltip>\\n  </div>\\n</template>\\n\"}],\"SLOTS\":[{\"name\":\"default\",\"type\":\"slot\",\"values\":null,\"description\":\"Add the trigger element of the tooltip.\",\"default\":null,\"link\":null,\"usage\":\"#default\",\"code\":\"<vs-tooltip>\\n  <vs-button flat>\\n    Do hover here\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"},{\"name\":\"tooltip\",\"type\":\"slot\",\"values\":null,\"description\":\"It is the content that will go inside the tooltip.\",\"default\":null,\"link\":null,\"usage\":\"#default\",\"code\":\"<vs-tooltip>\\n  <vs-button flat>\\n    Do hover here\\n  </vs-button>\\n  <template #tooltip>\\n    This is a beautiful button\\n  </template>\\n</vs-tooltip>\\n\"}],\"NEWS\":[\"border\",\"square\",\"circle\",\"shadow\",\"not-arrow\",\"loading\",\"content\"]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Default\",\"slug\":\"default\",\"link\":\"#default\",\"children\":[]},{\"level\":2,\"title\":\"Position\",\"slug\":\"position\",\"link\":\"#position\",\"children\":[]},{\"level\":2,\"title\":\"Color\",\"slug\":\"color\",\"link\":\"#color\",\"children\":[]},{\"level\":2,\"title\":\"Border\",\"slug\":\"border\",\"link\":\"#border\",\"children\":[]},{\"level\":2,\"title\":\"Square\",\"slug\":\"square\",\"link\":\"#square\",\"children\":[]},{\"level\":2,\"title\":\"Circle\",\"slug\":\"circle\",\"link\":\"#circle\",\"children\":[]},{\"level\":2,\"title\":\"Shadow\",\"slug\":\"shadow\",\"link\":\"#shadow\",\"children\":[]},{\"level\":2,\"title\":\"Not Arrow\",\"slug\":\"not-arrow\",\"link\":\"#not-arrow\",\"children\":[]},{\"level\":2,\"title\":\"Loading\",\"slug\":\"loading\",\"link\":\"#loading\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]},{\"level\":2,\"title\":\"API\",\"slug\":\"api\",\"link\":\"#api\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"components/Tooltip.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
