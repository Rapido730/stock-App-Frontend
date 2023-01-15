const { NavLink } = require("react-router-dom");

export const NiftyStatus = () => {
  return (
    <div>
      
      <div class="container">
        <ul class="nav nav-tabs ">
          <li class="active ml-3">
            <a href="#">NSE</a>
          </li>

          <li class="ml-3">
            <a href="#">Future</a>
          </li>
          <li class="ml-3">
            <a href="#">Options</a>
          </li>
        </ul>
      </div>

      <div class="container">
        <h1>NIFTY 50</h1>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-12  my-4">
            <h1>17972.15</h1>

            <h3 class="text-success">
              {" "}
              <i class="fa-solid fa-arrow-up"></i>113.95%
            </h3>
          </div>

          <div class="col-lg-4 col-md-4 col-12  my-4">
            <h3>DAY RANGE</h3>
          </div>
          <div class="col-lg-4 col-md-4 col-12  my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem culpa voluptas. Possimus, esse nam sequi consectetur ex
            praesentium laudantium quia, explicabo, a error eius. Reprehenderit
            eum excepturi nam nesciunt. Aliquid modi, impedit tempora odit est,
            non sapiente accusamus soluta eveniet consequuntur molestias dolorem
            tempore aspernatur magnam, vero alias. Quidem officia quo ipsam
            pariatur, culpa adipisci. Enim fuga natus sequi!
          </div>
        </div>
      </div>

      <div class="container">
        <ul class="nav nav-tabs ">
          <li class="active ml-3">
            <a href="#">Home</a>
          </li>

          <li class="ml-3">
            <a href="#">Menu 2</a>
          </li>
          <li class="ml-3">
            <a href="#">Menu 3</a>
          </li>

          <li class="ml-3">
            <a href="#">Menu 2</a>
          </li>
          <li class="ml-3">
            <a href="#">Menu 3</a>
          </li>

          <li class="ml-3">
            <a href="#">Menu 2</a>
          </li>
          <li class="ml-3">
            <a href="#">Menu 3</a>
          </li>
        </ul>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12  my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem culpa voluptas. Possimus, esse nam sequi consectetur ex
            praesentium laudantium quia, explicabo, a error eius. Reprehenderit
            eum excepturi nam nesciunt. Aliquid modi, impedit tempora odit est,
            non sapiente accusamus soluta eveniet consequuntur molestias dolorem
            tempore aspernatur magnam, vero alias. Quidem officia quo ipsam
            pariatur, culpa adipisci. Enim fuga natus sequi!
          </div>

          <div class="col-lg-6 col-md-6 col-12  my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quidem culpa voluptas. Possimus, esse nam sequi consectetur ex
            praesentium laudantium quia, explicabo, a error eius. Reprehenderit
            eum excepturi nam nesciunt. Aliquid modi, impedit tempora odit est,
            non sapiente accusamus soluta eveniet consequuntur molestias dolorem
            tempore aspernatur magnam, vero alias. Quidem officia quo ipsam
            pariatur, culpa adipisci. Enim fuga natus sequi!
          </div>
        </div>
      </div>
    </div>
  );
};
