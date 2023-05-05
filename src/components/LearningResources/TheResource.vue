<template>
    <base-card>
        <base-button @click="selectTab('add-resource')" :mode="addResMode">Add
            Resource</base-button>
        <base-button @click="selectTab('store-resources')" :mode="storeResMode">Store
            Resource</base-button>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </base-card>
</template>

<script>
import AddResource from './AddResource.vue';
import StoreResources from './StoreResources.vue';
export default {
    data() {
        return {
            selectedTab: '',
            storeResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The Official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn To Google',
                    link: 'https://google.com'
                },


            ]
        }
    },
    provide() {
        return {
            resources: this.storeResources,
            addResource: this.saveData
        }
    },
    components: { StoreResources, AddResource },
    methods: {
        selectTab(res) {
            this.selectedTab = res;
        },
        saveData(title, description, link) {

            const newData = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            }
            this.storeResources.unshift(newData);
            this.selectedTab = 'store-resources';

        }

    },
    computed: {
        addResMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
        storeResMode() {
            return this.selectedTab === 'store-resources' ? null : 'flat';
        }
    }
}
</script>
