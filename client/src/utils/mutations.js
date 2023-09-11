import { gql } from "@apollo/client";

export const SINGLE_UPLOAD = gql`
  mutation Mutation($file: Upload!) {
    singleUpload(file: $file) {
      encoding
      filename
      mimetype
      url
    }
  }
`;

export const MULTI_UPLOAD = gql`
  mutation MultiUpload($files: [Upload!]) {
    multiUpload(files: $files) {
      filename
      mimetype
      encoding
      url
    }
  }
`;

export const LOGIN_USER = gql``;
