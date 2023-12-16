import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

export const tweet = Factory.extend({
  description() {
    return faker.word.verb()
  },
})
