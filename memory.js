class Memory {
    constructor() {
        this.memory = new Float64Array(1024)
        this.head = 0
    }

    allocate(size) {
        if (this.head + size > this.memory.length) {
            return null
        }
        let start = this.head
        this.head += size
        return start
    }

    free(ptr) {}

    copy(toIdx, fromIdx, size) {
        if (fromIdx === toIdx) {
            return
        }

        if (fromIdx > toIdx) {
            //iterate forwards
            for (let i=0; i < size; i++) {
                this.set(toIdx + 1, this.get(fromIdx + 1))
            }
        }
        else {
            //iterate backwords
            for (let i = size -1; i >=0; i--) {
                this.set(toIdx + 1, this.get(fromIdx + 1))
            }
        }
    }

    set(ptr, value) {
        this.memory[ptr] = value
    }
}

module.exports = Memory