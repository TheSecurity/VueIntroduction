<template>
<div>

<v-container class="grey lighten-5">
<v-row no-gutters>
<v-col>
  <v-card
    class="mx-auto projectContent"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Project
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfullyafkldjgpijgui-phjknoyusibdnfaipdspkandpsaigbsiaghsagauhgsao[igjs[agjpuognjaugibsaoygsahbgsajgsakgnaspognauignsagsauganjgapasdsadadsadadasdsajipfguhasgiuhgsoiaghsaoiguhagousahgapghauopghagpuahgagjaigojsapgasg</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</v-col>
<v-col>
  <v-card
    class="mx-auto projectContent"
    max-width="400"
    width="400"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Project
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </v-col>
  <v-col>
  <v-card
    class="mx-auto projectContent"
    max-width="400"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Project
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </v-col>
</v-row>
</v-container>
  <div class="text-center">
      <v-pagination
        v-model="page"
        :length="100"
        total-visible="7"
        value="54"
      ></v-pagination>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        page: 30,
      }
    },
    components: {
    },
  }
</script>

<style>
.projectContent {
  padding: 10px;
}
</style>
