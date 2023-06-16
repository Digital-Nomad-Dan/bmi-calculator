import calculateBmi from "../common/calculatorBmi";

const BmiForm = (props) => {
  const { height, weight, setHeight, setWeight, setResult } = props;

  return (
    <form>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          className="form-control"
          placeholder="Cm"
          value={height}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="text"
          className="form-control"
          placeholder="Kg"
          value={weight}
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
      </div>

      <button
        className="btn btn-success w-100"
        onClick={() => {
           const result = calculateBmi(height, weight);  
          setResult(result);
          if (height < 100) {
            alert("Dear User you need to put height more than 100");
            return;
          }

          if (height < 50) {
            alert("Dear User you need to put height more than 100");
            return;
          }

         
          if (weight < 50) {
            alert("Dear User you need to put height more than 100");
            return;
          }


        
        }}
        type="button"
      >
        Calculate
      </button>
    </form>
  );
};

export default BmiForm;
