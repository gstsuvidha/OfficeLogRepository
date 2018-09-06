using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OfficeLog.Persistence.Migrations
{
    public partial class AddedFee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SoftwareInterested",
                table: "Marketings",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AlterColumn<string>(
                name: "ServiceInterested",
                table: "Marketings",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AddColumn<double>(
                name: "Fee",
                table: "Marketings",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AlterColumn<string>(
                name: "SoftwareInterested",
                table: "Companies",
                nullable: true,
                oldClrType: typeof(bool));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fee",
                table: "Marketings");

            migrationBuilder.AlterColumn<bool>(
                name: "SoftwareInterested",
                table: "Marketings",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "ServiceInterested",
                table: "Marketings",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "SoftwareInterested",
                table: "Companies",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
