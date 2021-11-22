<template>
  <ul class="character-list">
    <li class="character-list__header-row">
      <div class="column column--clickable" @click="sort('name')">
        <span>Name</span>
      </div>
      <div class="column column--clickable" @click="sort('height')">
        <span>Height (cm)</span>
      </div>
      <div class="column column--clickable" @click="sort('mass')">
        <span>Mass (kg)</span>
      </div>
      <div class="column column--clickable" @click="sort('created')">
        <span>Created</span>
      </div>
      <div class="column column--clickable" @click="sort('edited')">
        <span>Edited</span>
      </div>
      <div class="column column--clickable" @click="sort('homeworld')">
        <span>Homeworld</span>
      </div>
    </li>
    <li v-for="character of sortedCharacters" :key="character.id">
      <CharacterListRow :character="character" />
    </li>
    <li class="character-list__no-results-row" v-if="!sortedCharacters?.length">
      <span>No results found</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list__row,
.character-list__header-row {
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
}

.character-list__no-results-row {
  padding: var(--base-spacing--half);
  text-align: center;
}

.character-list {
  margin: 0;
  padding: 0;
  border: var(--base-border-style);
  list-style: none;
}

.character-list__header-row {
  span {
    font-weight: 600;
  }
}

li + li {
  border-top: var(--base-border-style);
}

.list__row:hover {
  background-color: var(--table-background-color--hover);
}

.column {
  padding: var(--base-spacing--quarter) var(--base-spacing--half);

  & + .column {
    border-left: var(--base-border-style);
  }
}

.column--clickable {
  cursor: pointer;

  &:hover {
    background-color: var(--table-background-color--hover);
  }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CharacterListRow from "@/components/character-explorer/CharacterListRow.vue";
import { Character } from "@/models/characters";

@Options({
  components: {
    CharacterListRow,
  },
  props: {
    characters: {
      required: true,
      type: Array,
    },
  },
  computed: {
    sortedCharacters() {
      let characters = [...this.characters];

      const field: keyof Character = this.sortField;

      if (field === null) {
        return characters;
      }

      characters.sort(this.characterSorter);

      if (!this.sortAscending) {
        characters = characters.reverse();
      }

      return characters;
    },
  },
})
export default class CharacterList extends Vue {
  characters?: Array<Character>;

  sortedCharacters?: Array<Character>;

  sortAscending = true;

  sortField: keyof Character | null = "name";

  characterSorter(a: Character, b: Character) {
    let valueA;

    let valueB;

    const field = this.sortField;

    if (
      field === "created" ||
      field === "edited" ||
      field === "mass" ||
      field === "height"
    ) {
      valueA = a[field];

      valueB = b[field];
    }

    if (field === "name") {
      valueA = a.name;

      valueB = b.name;
    }

    if (field === "homeworld") {
      valueA = a.homeworld?.name;

      valueB = b.homeworld?.name;
    }

    if (valueA !== undefined && valueB !== undefined) {
      if (typeof valueA === "string") {
        valueA = valueA.toLocaleLowerCase();
      }

      if (typeof valueB === "string") {
        valueB = valueB.toLocaleLowerCase();
      }

      if (valueA === null) {
        return 0;
      }

      if (valueB === null) {
        return 1;
      }

      if (valueA > valueB) {
        return 1;
      } else if (valueA < valueB) {
        return -1;
      }
    }

    return 0;
  }

  sort(field: keyof Character): void {
    if (this.sortField === field) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortAscending = true;
    }

    this.sortField = field;
  }
}
</script>
