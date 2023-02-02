export default {
    template: `
    <form @submit.prevent="add">
    <div class="border border-gray-600 p-2 text-black">
    <input type="text" v-model="newAssignment" placeholder="add new assignment" class="p-2" />
    <button type="submit" class="bg-white p-2 ml-1 hover:bg-gray-300">Add</button>
    </div>
     
    </form>`,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}