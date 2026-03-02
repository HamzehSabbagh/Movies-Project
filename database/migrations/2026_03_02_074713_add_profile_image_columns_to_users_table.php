<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (! Schema::hasColumn('users', 'image_blob')) {
            DB::statement('ALTER TABLE users ADD image_blob LONGBLOB NULL AFTER role_id');
        }

        if (! Schema::hasColumn('users', 'image_mime')) {
            Schema::table('users', function (Blueprint $table) {
                $table->string('image_mime')->nullable()->after('image_blob');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'image_mime')) {
                $table->dropColumn('image_mime');
            }

            if (Schema::hasColumn('users', 'image_blob')) {
                $table->dropColumn('image_blob');
            }
        });
    }
};
