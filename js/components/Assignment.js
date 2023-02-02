export default {
    template: `
    <li class="p-2 align-items-center">
    <label class="p-1 flex justify-between">
        {{ assignment.name}}
        <input type="checkbox" v-model="assignment.complete" class="ml-2">
    </label>
</li>
    `,
    props: {
        assignment: Object
    }
}