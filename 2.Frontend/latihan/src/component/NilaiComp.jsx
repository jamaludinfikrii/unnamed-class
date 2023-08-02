function NilaiComp({ nilai, name }) {
  return (
    <div>
     {name}, nilai = {nilai}, anda {nilai > 70 ? "lulus" : "remidi"}
    </div>
  );
}

export default NilaiComp;
