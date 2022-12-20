/**
 * Types for DragAndDrop
 * @param {image} string - Image
 * @param {setImage} function - Set image function
 * @param {maxFileSize} number - Max size of input file
 * @param {fileTypes} Array - Types of input files
 * @param {required} boolean - Is form item required
 * @param {label} string - Label of form item
 */

export interface IDragAndDropProps {
  image: string | ArrayBuffer | null;
  setImage: (a: string | ArrayBuffer | null) => any;
  maxFileSize: number;
  fileTypes: Array<string>;
  required?: boolean;
  label: string;
}
