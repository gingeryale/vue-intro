import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
    <section class="space-y-6">
    <assignment-list 
    :assignments="filter.inProgress" 
    title="In Progress">
    </assignment-list>
    <assignment-list 
    :assignments="filter.completed" 
    title="Completed">
    </assignment-list>

    <assignment-create @add="add"></assignment-create>

    </section>
    `,
    data() {
        return {
            assignments: [
                {
                    name: 'Finish project',
                    complete: false,
                    id: 1,
                    tag: 'reading'
                }, {
                    name: 'Pay credit card',
                    complete: false,
                    id: 2,
                    tag: 'math'
                }, {
                    name: 'Pet food store',
                    complete: false,
                    id: 3,
                    tag: 'math'
                }
            ],
            //newAssignment: ''
        }
    },
    computed: {

        filter() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
};