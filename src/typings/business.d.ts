declare namespace Auth {
  type RoleType = keyof typeof import("@/enums/roleEnum").RoleEnum;

  interface UserInfo {
    userId: string;
    userName: string;
    userRole: RoleType;
  }
}
