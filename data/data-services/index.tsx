import serviceOne from "./service_one";
import serviceTwo from "./service_two";
import serviceThree from "./service_three";
import type  serviceData  from "../../interface/service";

const services: Record<string, serviceData> = {
  serviceOne: serviceOne,
  serviceTwo: serviceTwo,
  serviceThree: serviceThree
};

export default services