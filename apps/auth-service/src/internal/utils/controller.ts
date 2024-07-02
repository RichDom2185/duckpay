import { Request, Response } from "express";

type ControllerMethods<T> = {
  [key: string]: (this: T, req: Request, res: Response) => void;
};

export const createController = <
  C extends new (...args: any[]) => any,
  M extends ControllerMethods<InstanceType<C>>,
>(
  baseClass: C,
  controllerMethods: M
): { new (...args: ConstructorParameters<C>): InstanceType<C> & M } => {
  return new Proxy(baseClass, {
    construct(target, args) {
      const instance = new target(...args);
      for (const key in controllerMethods) {
        instance[key] = controllerMethods[key].bind(instance);
      }
      return instance;
    },
  });
};
