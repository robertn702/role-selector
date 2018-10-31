import React from 'react';

import renderer from 'react-test-renderer';

import CanRender from '../src/Role/CanRender';

describe('CanRender', () => {
  it('should render if canRender is true', () => {
    const child = 'can render'
    const tree = renderer
      .create(
        <CanRender canRender>
          {child}
        </CanRender>
      )
      .toJSON();

    expect(tree).toBe(child);
  });

  it('should not render if canRender is false', () => {
    const child = 'can render'
    const tree = renderer
      .create(
        <CanRender canRender={false}>
          {child}
        </CanRender>
      )
      .toJSON();

      expect(tree).toBe(null);
  });

  it('should call child function with canRender prop', () => {
    const childObj = {
      childFunc(canRender) {
        return '' + canRender;
      }
    };
    const childFunc = jest.spyOn(childObj, 'childFunc');

    const treeTrue = renderer
      .create(
        <CanRender canRender={true}>
          {childObj.childFunc}
        </CanRender>
      )
      .toJSON();

    const treeFalse = renderer
      .create(
        <CanRender canRender={false}>
          {childObj.childFunc}
        </CanRender>
      )
      .toJSON();

    expect(childFunc).toHaveBeenCalled();
    expect(treeTrue).toBe('true');
    expect(treeFalse).toBe('false');
  });
});
