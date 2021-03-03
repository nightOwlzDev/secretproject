
// Employee can extend Person
export class Employee {
    protected name: string;
    private department: string;

    constructor(name: string, department: string) {
        this.name = name;
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }

}
