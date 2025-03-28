{
    class Exam {
        constructor(public kor: number, public eng: number) {}
        total() {
            return this.kor + this.eng;
        }
    }

    const exam:Exam = new Exam(100, 90);
}   

{
    interface Exam {
        kor: number;
        eng: number;
        total(): number;
    }
    class ExamImpl implements Exam {
        constructor(public kor: number, public eng: number) {}
        total() {
            return this.kor + this.eng;
        }
    }
    const exam:Exam = new ExamImpl(100, 90);
    console.log(exam.total());

}

