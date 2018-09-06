using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OfficeLog.Persistence.Migrations
{
    public partial class AddedUserProfileId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserProfileId",
                table: "Marketings",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserProfileId",
                table: "Companies",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Marketings_UserProfileId",
                table: "Marketings",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Companies_UserProfileId",
                table: "Companies",
                column: "UserProfileId");

            migrationBuilder.AddForeignKey(
                name: "FK_Companies_UserProfiles_UserProfileId",
                table: "Companies",
                column: "UserProfileId",
                principalTable: "UserProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Marketings_UserProfiles_UserProfileId",
                table: "Marketings",
                column: "UserProfileId",
                principalTable: "UserProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Companies_UserProfiles_UserProfileId",
                table: "Companies");

            migrationBuilder.DropForeignKey(
                name: "FK_Marketings_UserProfiles_UserProfileId",
                table: "Marketings");

            migrationBuilder.DropIndex(
                name: "IX_Marketings_UserProfileId",
                table: "Marketings");

            migrationBuilder.DropIndex(
                name: "IX_Companies_UserProfileId",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "UserProfileId",
                table: "Marketings");

            migrationBuilder.DropColumn(
                name: "UserProfileId",
                table: "Companies");
        }
    }
}
