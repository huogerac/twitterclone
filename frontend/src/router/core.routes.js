// Composables
import DefaultLayout from "@/layouts/default/DefaultLayout.vue"
import TweetListView from "@/pages/core/TweetListView.vue"

export default [
  {
    path: "/tweets",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "tweets-list",
        component: TweetListView,
      },
    ],
  },
]
