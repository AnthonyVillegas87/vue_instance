<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResourcesButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "design-gurus",
          title: "Design Gurus",
          description: "Learn System Design",
          link: "https://designgurus.io",
        },
      ],
    };
  },
  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResourcesButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString,
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.setSelectedTab("stored-resources");
    },
    removeResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(
        (res) => res.id === resourceId.id
      );
      this.storedResources.splice(resourceIndex, 1);
    },
  },
};
</script>
